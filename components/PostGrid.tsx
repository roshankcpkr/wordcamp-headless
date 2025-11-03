import { Post } from '@/types';
import PostCard from './PostCard';

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          No blog posts found. Please check your WordPress GraphQL configuration.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

