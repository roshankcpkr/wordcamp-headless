import { graphqlClient } from '@/lib/graphql';
import { GET_POSTS_BY_CATEGORY } from '@/lib/queries';
import { Post } from '@/types';
import PostGrid from '@/components/PostGrid';
import Link from 'next/link';

async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  try {
    const data = await graphqlClient.request<{ posts: { nodes: Post[] } }>(
      GET_POSTS_BY_CATEGORY,
      { categorySlug, first: 20 }
    );
    return data.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);

  // Convert slug to readable name
  const categoryName = slug
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
            Category: {categoryName}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} found in this category
          </p>
        </div>

        <PostGrid posts={posts} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${categoryName} | WordCamp Headless Blog`,
    description: `Blog posts in the ${categoryName} category`,
  };
}

