import { Bike } from '@/types';
import BikeCard from './BikeCard';

interface BikeGridProps {
  bikes: Bike[];
}

export default function BikeGrid({ bikes }: BikeGridProps) {
  if (!bikes || bikes.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          No bikes found. Please check your WordPress GraphQL configuration.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
}

