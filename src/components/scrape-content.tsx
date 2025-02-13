import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ScrapedDataItem {
  title: string;
  imageUrl: string;
  content: string;
  author: string;
  date: string;
  articleUrl: string;
}

export default function ScrapedData() {
  const { data, error } = useSWR<ScrapedDataItem[]>('/api/scrape', fetcher, { 
    refreshInterval: 60000
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return (
    <div className="flex flex-wrap justify-center gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4 p-6 flex flex-col w-full">
          <div className="h-64 overflow-hidden bg-gray-200 animate-pulse rounded-lg" />
          <div className="px-4 py-6 flex-1">
            <div className="h-7 bg-gray-200 animate-pulse rounded-full mb-4 w-3/4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 animate-pulse rounded-full" />
              <div className="h-4 bg-gray-200 animate-pulse rounded-full w-5/6" />
              <div className="h-4 bg-gray-200 animate-pulse rounded-full w-4/6" />
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex gap-2 mb-4">
              <div className="h-7 bg-gray-200 animate-pulse rounded-full w-20" />
              <div className="h-7 bg-gray-200 animate-pulse rounded-full w-24" />
            </div>
            <div className="h-12 bg-gray-200 animate-pulse rounded-xl w-full" />
          </div>
        </div>
      ))}
    </div>
  );

  console.log('Fetched Data:', data);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data?.map((item, index) => (
        <div key={index} className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4 p-6 flex flex-col">
          <div className="h-64 overflow-hidden">
            <Image 
              className="w-full h-full object-cover" 
              src={item.imageUrl} 
              alt={item.title}
              width={400}
              height={400}
            />
          </div>
          <div className="px-4 py-6 flex-1">
            <div className="font-bold text-2xl mb-3 min-h-[64px]">{item.title}</div>
            <p className="text-gray-700 text-lg mb-4 line-clamp-4">
              {item.content}
            </p>
          </div>
          <div className="px-4 pb-4">
            <div className="flex gap-2 mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-base font-semibold text-gray-700">{item.author}</span>
              <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-base font-semibold text-gray-700">{item.date}</span>
            </div>
            <a href={item.articleUrl} target="_blank" className="w-full flex justify-center text-white bg-blue-500 border-0 py-3 px-10 focus:outline-none hover:bg-blue-600 rounded-xl text-xl transition-colors">
              Les mer
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}