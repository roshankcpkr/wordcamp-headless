import Image from 'next/image';
import { notFound } from 'next/navigation';
import { graphqlClient } from '@/lib/graphql';
import { GET_BIKE_BY_SLUG } from '@/lib/queries';
import { Bike } from '@/types';

async function getBike(slug: string): Promise<Bike | null> {
  try {
    const data = await graphqlClient.request<{ bikeBy: Bike }>(GET_BIKE_BY_SLUG, {
      slug,
    });
    return data.bikeBy || null;
  } catch (error) {
    console.error('Error fetching bike:', error);
    return null;
  }
}

interface BikeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BikeDetailPage({ params }: BikeDetailPageProps) {
  const { slug } = await params;
  const bike = await getBike(slug);

  if (!bike) {
    notFound();
  }

  // Get image from bikes ACF field or featuredImage
  const imageUrl = bike.bikes?.image?.node?.sourceUrl || bike.featuredImage?.node?.sourceUrl;
  const price = bike.bikes?.price;
  const model = bike.bikes?.model;
  const engine = bike.bikes?.engine;
  const mileage = bike.bikes?.mileage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            {imageUrl ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-2xl dark:from-zinc-800 dark:to-zinc-900">
                <Image
                  src={imageUrl}
                  alt={bike.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                <span className="text-6xl">🏍️</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="mb-4 text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                {bike.title}
              </h1>
              {price !== undefined && price !== null && (
                <div className="mb-6 inline-block rounded-full bg-green-500 px-6 py-3 text-2xl font-bold text-white shadow-lg">
                  {`Rs. ${Number(price).toLocaleString('en-IN')}`}
                </div>
              )}
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
              {model && (
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
                  <span className="font-semibold text-zinc-600 dark:text-zinc-400">
                    Model
                  </span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {model}
                  </span>
                </div>
              )}
              {engine && (
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
                  <span className="font-semibold text-zinc-600 dark:text-zinc-400">
                    Engine
                  </span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {engine}
                  </span>
                </div>
              )}
              {mileage && (
                <div className="flex items-center justify-between pb-4">
                  <span className="font-semibold text-zinc-600 dark:text-zinc-400">
                    Mileage
                  </span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {mileage}
                  </span>
                </div>
              )}
            </div>

            {bike.content && (
              <div
                className="prose prose-lg max-w-none rounded-2xl bg-white p-6 shadow-lg dark:prose-invert dark:bg-zinc-900"
                dangerouslySetInnerHTML={{ __html: bike.content }}
              />
            )}

            {bike.terms && bike.terms.nodes && bike.terms.nodes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {bike.terms.nodes.map((taxonomy, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {taxonomy.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BikeDetailPageProps) {
  const { slug } = await params;
  const bike = await getBike(slug);

  if (!bike) {
    return {
      title: 'Bike Not Found | WordCamp Headless',
    };
  }

  return {
    title: `${bike.title} | WordCamp Headless`,
    description: `Details about ${bike.title} - Model: ${bike.bikes?.model}, Price: $${bike.bikes?.price}`,
  };
}

