import { NextResponse } from 'next/server';

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

export async function GET() {
  const now = Date.now();
  const fiveMinutes = 1 * 60 * 1000;

  if (cachedData && now - lastFetchTime < fiveMinutes) {
    return NextResponse.json(cachedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59'
      }
    });
  }

  try {
    const axiosData = await fetchWithAxios();
    
    if (axiosData.length > 0) {
      cachedData = axiosData;
      lastFetchTime = now;
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59'
        }
      });
    }

    const puppeteerData = await fetchWithPuppeteer();
    cachedData = puppeteerData;
    lastFetchTime = now;

    return NextResponse.json(cachedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59'
      }
    });
  } catch (error) {
    console.error('Scraping failed:', error);
    return NextResponse.json(
      [],
      { 
        status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=59'
        }
      }
    );
  }
}

async function fetchWithAxios(): Promise<ScrapedArticle[]> {
  const { default: axios } = await import('axios');

  const response = await axios.get('https://dfs.no/nc-2025-runde-1', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cookie': 'cookie_consent=true'
    }
  });

  return parseHTML(response.data);
}

async function fetchWithPuppeteer(): Promise<ScrapedArticle[]> {
  const { default: puppeteer } = await import('puppeteer');
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  await page.goto('https://dfs.no/nc-2025-runde-1', { waitUntil: 'networkidle2' });
  
  const content = await page.content();
  await browser.close();

  return parseHTML(content);
}

async function parseHTML(html: string): Promise<ScrapedArticle[]> {
  const { load } = await import('cheerio');
  const $ = load(html);
  const results: ScrapedArticle[] = [];

  $('article.article-preview').each((_: number, element) => {
    const $el = $(element);
    const articleUrl = $el.find('a.article-preview__link').attr('href');
    
    results.push({
      title: $el.find('.article-preview__title span').text().trim(),
      content: $el.find('.article-preview__text p').first().text().trim(),
      imageUrl: $el.find('.article-preview__image img').attr('src') || '',
      author: $el.find('.article-preview__author a').text().trim(),
      date: $el.find('.article-preview__date').text().trim(),
      articleUrl: articleUrl ? `https://dfs.no${articleUrl}` : ''
    });
  });

  return results;
}