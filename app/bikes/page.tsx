import { graphqlClient } from '@/lib/graphql';
import { GET_ALL_BIKES } from '@/lib/queries';
import { Bike } from '@/types';
import BikeGrid from '@/components/BikeGrid';

async function getBikes(): Promise<Bike[]> {
  try {
    const data = await graphqlClient.request<{ bikes: { nodes: Bike[] } }>(
      GET_ALL_BIKES
    );
    return data.bikes?.nodes || [];
  } catch (error) {
    console.error('Error fetching bikes:', error);
    return [];
  }
}

export default async function BikesPage() {
  const bikes = await getBikes();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Explore Our Bikes
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Discover our amazing collection of bikes with detailed specifications,
            pricing, and features.
          </p>
        </div>

        {/* Bikes Grid */}
        <BikeGrid bikes={bikes} />
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Bikes | WordCamp Headless',
  description: 'Explore our collection of bikes with detailed specifications and pricing.',
};

