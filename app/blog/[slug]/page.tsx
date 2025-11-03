import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { graphqlClient } from '@/lib/graphql';
import { GET_POST_BY_SLUG } from '@/lib/queries';
import { Post } from '@/types';

async function getPost(slug: string): Promise<Post | null> {
  try {
    const data = await graphqlClient.request<{ postBy: Post }>(GET_POST_BY_SLUG, {
      slug,
    });
    return data.postBy || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage?.node?.sourceUrl;
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          {post.categories && post.categories.nodes && post.categories.nodes.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.nodes.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100 md:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <time>{formattedDate}</time>
            {post.author?.node?.name && (
              <>
                <span>•</span>
                <span>By {post.author.node.name}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {imageUrl && (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-2xl dark:from-zinc-800 dark:to-zinc-900">
            <Image
              src={imageUrl}
              alt={post.featuredImage?.node?.altText || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Content */}
        {post.content && (
          <div
            className="prose prose-lg max-w-none rounded-2xl bg-white p-8 shadow-lg dark:prose-invert dark:bg-zinc-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* Tags */}
        {post.tags && post.tags.nodes && post.tags.nodes.length > 0 && (
          <footer className="mt-8 flex flex-wrap gap-2">
            {post.tags.nodes.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog/tag/${tag.slug}`}
                className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              >
                #{tag.name}
              </Link>
            ))}
          </footer>
        )}
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | WordCamp Headless',
    };
  }

  return {
    title: `${post.title} | WordCamp Headless`,
    description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
  };
}

