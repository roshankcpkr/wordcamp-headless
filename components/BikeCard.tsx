import Image from 'next/image';
import Link from 'next/link';
import { Bike } from '@/types';

interface BikeCardProps {
  bike: Bike;
}

export default function BikeCard({ bike }: BikeCardProps) {
  // Get image from bikes ACF field or featuredImage
  const imageUrl = bike.bikes?.image?.node?.sourceUrl || 
                   bike.featuredImage?.node?.sourceUrl || 
                   '/placeholder-bike.jpg';
  const price = bike.bikes?.price;
  const model = bike.bikes?.model;
  const engine = bike.bikes?.engine;
  const mileage = bike.bikes?.mileage;

  return (
    <Link href={`/bikes/${bike.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-black">
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
          {imageUrl && imageUrl !== '/placeholder-bike.jpg' && (
            <Image
              src={imageUrl}
              alt={bike.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {!imageUrl || imageUrl === '/placeholder-bike.jpg' ? (
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl">🏍️</span>
            </div>
          ) : null}
          {price !== undefined && price !== null && (
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-orange-600 shadow-lg backdrop-blur-sm dark:bg-zinc-900/90 dark:text-orange-400">
              {`Rs. ${Number(price).toLocaleString('en-IN')}`}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-zinc-900 transition-colors group-hover:text-orange-600 dark:text-zinc-100 dark:group-hover:text-orange-400">
            {bike.title}
          </h3>
          
          <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {model && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">Model:</span>
                <span>{model}</span>
              </div>
            )}
            {engine && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">Engine:</span>
                <span>{engine}</span>
              </div>
            )}
            {mileage && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">Mileage:</span>
                <span>{mileage}</span>
              </div>
            )}
          </div>

          {bike.content && (
            <div
              className="prose prose-sm mt-4 max-w-none line-clamp-3 dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: bike.content }}
            />
          )}

          <div className="mt-4 flex items-center text-sm font-medium text-orange-600 dark:text-orange-400">
            View Details
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

