import { NextResponse } from 'next/server';
import chromium from '@sparticuz/chromium';
import type { Browser } from 'puppeteer-core';

interface ScrapedArticle {
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  articleUrl: string;
}

let cachedData: ScrapedArticle[] | null = null;
let lastFetchTime: number = 0;
let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  const now = Date.now();
  const fiveMinutes = 5 * 60 * 1000;

  if (cachedData && now - lastFetchTime < fiveMinutes) {
    return NextResponse.json({ data: cachedData });
  }

  if (!process.env.BROWSERLESS_TOKEN) {
    console.error('BROWSERLESS_TOKEN environment variable is not set');
    return NextResponse.json(
      { 
        data: [], 
        error: 'Server configuration error', 
        details: 'Missing BROWSERLESS_TOKEN environment variable'
      }, 
      { status: 500 }
    );
  }

  async function attemptScrape() {
    const puppeteer = (await import('puppeteer-core')).default;
    const browser: Browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    try {
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
      
      await page.goto('https://dfs.no/nc-2025-runde-1', {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      const results = await page.evaluate(() => {
        const articles = Array.from(document.querySelectorAll('article.article-preview'));
        return articles.map(article => ({
          title: article.querySelector('.article-preview__title span')?.textContent?.trim() || '',
          content: article.querySelector('.article-preview__text p')?.textContent?.trim() || '',
          imageUrl: article.querySelector('.article-preview__image img')?.getAttribute('src') || '',
          author: article.querySelector('.article-preview__author a')?.textContent?.trim() || '',
          date: article.querySelector('.article-preview__date')?.textContent?.trim() || '',
          articleUrl: article.querySelector('a.article-preview__link')?.getAttribute('href') 
            ? `https://dfs.no${article.querySelector('a.article-preview__link')?.getAttribute('href')}`
            : ''
        }));
      });

      await browser.close();
      return results;
    } catch (error) {
      await browser.close();
      throw error;
    }
  }

  try {
    while (retryCount < MAX_RETRIES) {
      try {
        const results = await attemptScrape();
        cachedData = results;
        lastFetchTime = now;
        retryCount = 0; // Reset retry count on success
        return NextResponse.json({ data: results });
      } catch (error) {
        retryCount++;
        if (error.message.includes('429')) {
          console.log(`Rate limited, attempt ${retryCount} of ${MAX_RETRIES}`);
          if (retryCount < MAX_RETRIES) {
            await wait(RETRY_DELAY * retryCount);
            continue;
          }
        }
        throw error;
      }
    }
  } catch (error) {
    console.error('Scraping failed:', error);
    return NextResponse.json({ data: [], error: 'Scraping failed', details: error.message }, { status: 500 });
  }
}