import { graphqlClient } from '@/lib/graphql';
import { GET_ALL_POSTS, GET_CATEGORIES, GET_TAGS } from '@/lib/queries';
import { Post, Category, Tag } from '@/types';
import PostGrid from '@/components/PostGrid';
import Link from 'next/link';

async function getPosts(): Promise<Post[]> {
  try {
    const data = await graphqlClient.request<{ posts: { nodes: Post[] } }>(
      GET_ALL_POSTS,
      { first: 20 }
    );
    return data.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const data = await graphqlClient.request<{ categories: { nodes: Category[] } }>(
      GET_CATEGORIES
    );
    return data.categories?.nodes || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

async function getTags(): Promise<Tag[]> {
  try {
    const data = await graphqlClient.request<{ tags: { nodes: Tag[] } }>(
      GET_TAGS
    );
    return data.tags?.nodes || [];
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

export default async function BlogPage() {
  const [posts, categories, tags] = await Promise.all([
    getPosts(),
    getCategories(),
    getTags(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Read our latest articles, stories, and insights about bikes and more.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
                <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Categories
                </h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
                      >
                        <span>{category.name}</span>
                        {category.count !== undefined && (
                          <span className="rounded-full bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-800">
                            {category.count}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
                <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog/tag/${tag.slug}`}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                    >
                      #{tag.name}
                      {tag.count !== undefined && ` (${tag.count})`}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <PostGrid posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Blog | WordCamp Headless',
  description: 'Read our latest articles, stories, and insights about bikes and more.',
};

