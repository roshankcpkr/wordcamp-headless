import { graphqlClient } from '@/lib/graphql';
import { GET_POSTS_BY_TAG } from '@/lib/queries';
import { Post } from '@/types';
import PostGrid from '@/components/PostGrid';
import Link from 'next/link';

async function getPostsByTag(tagSlug: string): Promise<Post[]> {
  try {
    const data = await graphqlClient.request<{ posts: { nodes: Post[] } }>(
      GET_POSTS_BY_TAG,
      { tagSlug, first: 20 }
    );
    return data.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }
}

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const posts = await getPostsByTag(slug);

  // Convert slug to readable name
  const tagName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Tag: #{tagName}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} found with this tag
          </p>
        </div>

        <PostGrid posts={posts} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: TagPageProps) {
  const { slug } = await params;
  const tagName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `#${tagName} | WordCamp Headless Blog`,
    description: `Blog posts tagged with ${tagName}`,
  };
}

