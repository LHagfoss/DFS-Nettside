import axios from 'axios';
import { load } from 'cheerio';

interface ScrapedDataItem {
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  articleUrl: string;
}

async function scrapeData(): Promise<ScrapedDataItem[]> {
  const url = 'https://dfs.no/nc-2025-runde-1';
  const { data } = await axios.get<string>(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cookie': 'cookie_consent=true'
    }
  });
  
  const $ = load(data);
  const scrapedData: ScrapedDataItem[] = [];

  $('article.article-preview').each((index, element) => {
    const $el = $(element);
    const articleUrl = $el.find('a.article-preview__link').attr('href');
    
    scrapedData.push({
      title: $el.find('.article-preview__title span').text().trim(),
      content: $el.find('.article-preview__text p').first().text().trim(),
      imageUrl: $el.find('.article-preview__image img').attr('src') || '',
      author: $el.find('.article-preview__author a').text().trim(),
      date: $el.find('.article-preview__date').text().trim(),
      articleUrl: articleUrl ? `https://dfs.no${articleUrl}` : ''
    });
  });

  return scrapedData;
}

export default scrapeData;
