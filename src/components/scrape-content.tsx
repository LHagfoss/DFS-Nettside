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
    refreshInterval: 60000,
    fallbackData: []
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
