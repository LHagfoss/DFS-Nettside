import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

interface ScrapedArticle {
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  articleUrl: string;
}

interface Article {
  title: string;
  date: string;
  content: string;
  imageUrl: string | null;
  link?: string;
}

export async function GET() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://mittdfs.no/hovedside/aktuelt-na/sok/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    await page.waitForSelector('.article-preview', { timeout: 5000 });

    const articles = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.article-preview'));
      return items.map(item => {
        const titleElement = item.querySelector('.article-preview__title');
        const linkElement = item.querySelector('a[ui-sref^="article"]');
        
        return {
          title: titleElement?.textContent?.trim() || '',
          url: linkElement?.getAttribute('href') || '',
          date: item.querySelector('.article-preview__date')?.textContent?.trim() || ''
        };
      });
    });

    await browser.close();

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Scraping failed:', error);
    return NextResponse.json(
      { error: 'Scraping failed' },
      { status: 500 }
    );
  }
}

async function fetchWithAxios(): Promise<ScrapedArticle[]> {
  const { default: axios } = await import('axios');
  
  const response = await axios.get('https://dfs.no/nc-2025-runde-1', {
    timeout: 60000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://google.com/'
    }
  });

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return parseHTML(response.data);
}

async function parseHTML(html: string): Promise<ScrapedArticle[]> {
  if (!html) throw new Error('No HTML content received');
  const $ = cheerio.load(html);
  const results: ScrapedArticle[] = [];

  console.log('Checking for article elements...');
  console.log('Sample HTML structure:', $.html().substring(0, 500));

  $('article.article-preview').each((index: number, element: CheerioElement) => {
    try {
      const $el = $(element);
      const articleUrlPath = $el.find('a.article-preview__link').attr('href');
      
      if (!articleUrlPath || !$el.find('.article-preview__title').text()) {
        console.warn(`Skipping incomplete article at index ${index}`);
        return;
      }

      const article = {
        title: $el.find('.article-preview__title span').text().trim(),
        content: $el.find('.article-preview__text p').first().text().trim(),
        imageUrl: $el.find('.article-preview__image').css('background-image')
          .replace(/^url\(["']?/, '')
          .replace(/["']?\)$/, ''),
        author: $el.find('.article-preview__author a').text().trim(),
        date: $el.find('.article-preview__date').text().trim(),
        articleUrl: `https://dfs.no${articleUrlPath}`
      };

      results.push(article);
    } catch (error) {
      console.error(`Error processing article ${index}:`, error);
    }
  });

  console.log(`Parsed ${results.length} articles`);
  return results;
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    
    if (!url) {
      return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const html = await response.text();

    if (!html) throw new Error('No HTML content received');
    const $ = cheerio.load(html);

    const articles: Article[] = [];
    $('article.article-preview').each((i, el) => {
      const $el = $(el);
      articles.push({
        title: $el.find('h3.article-preview__title').text().trim(),
        date: $el.find('.article-preview__date').text().trim(),
        content: $el.find('.article-preview__text p').first().text().trim(),
        imageUrl: $el.find('.article-preview__image').css('background-image')
          ?.replace(/^url\(["']?/, '')
          ?.replace(/["']?\)$/, '') || null,
        link: $el.find('a.article-preview__link').attr('href')
      });
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ articles });
    
  } catch (error: any) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: error.message || 'Scraping failed' },
      { status: 500 }
    );
  }
}