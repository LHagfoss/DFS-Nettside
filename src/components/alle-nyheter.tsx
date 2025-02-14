import useSWR, { preload } from 'swr';
import Image from 'next/image';
import { useEffect } from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

preload('/api/scrape', fetcher);

interface ScrapedDataItem {
  title: string;
  imageUrl: string;
  content: string;
  author: string;
  date: string;
  articleUrl: string;
}

export default function AlleNyheter() {
  useEffect(() => {
    preload('/api/scrape', fetcher);
  }, []);

  const { data: response, error } = useSWR('/api/scrape', fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false 
  });

  if (error) return <div>Failed to load</div>;
  if (!response) return (
    <div className="mt-36 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md animate-pulse">
          <div className="h-64 overflow-hidden">
            <div className="w-[400px] h-[400px] bg-gray-200"></div>
          </div>
          <div className="px-4 py-6 flex-1">
            <div className="h-8 bg-gray-200 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex gap-2 mb-4">
              <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-12 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const articles = response.data || [];

  return (
    <div className="mt-36 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {articles.map((article: ScrapedDataItem, index: number) => (
        <div key={index} className="border rounded-xl p-4 shadow-md">
          <div className="h-64 overflow-hidden">
            <Image 
              className="w-full h-full object-cover" 
              src={article.imageUrl} 
              alt={article.title}
              width={400}
              height={400}
            />
          </div>
          <div className="px-4 py-6 flex-1">
            <div className="font-bold text-2xl mb-3 min-h-[64px]">{article.title}</div>
            <p className="text-gray-700 text-lg mb-4 line-clamp-4">
              {article.content}
            </p>
          </div>
          <div className="px-4 pb-4">
            <div className="flex gap-2 mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-base font-semibold text-gray-700">{article.author}</span>
              <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-base font-semibold text-gray-700">{article.date}</span>
            </div>
            <a href={article.articleUrl} target="_blank" className="w-full flex justify-center text-white bg-blue-500 border-0 py-3 px-10 focus:outline-none hover:bg-blue-600 rounded-xl text-xl transition-colors">
              Les mer
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}