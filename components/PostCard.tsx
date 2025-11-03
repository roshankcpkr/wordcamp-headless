import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = post.featuredImage?.node?.sourceUrl;
  const excerptHtml = post.excerpt || '';
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-zinc-900">
        {/* Image */}
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
            <Image
              src={imageUrl}
              alt={post.featuredImage?.node?.altText || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {post.categories?.nodes?.map((category, index) => (
              <span
                key={category.id ?? category.slug ?? `${category.name}-${index}`}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {category.name}
              </span>
            ))}
          </div>

          <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
            {post.title}
          </h3>

          {excerptHtml && (
            <div
              className="prose prose-sm mb-4 max-w-none line-clamp-3 dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: excerptHtml }}
            />
          )}

          <div className="flex items-center justify-between">
            <time className="text-xs text-zinc-500 dark:text-zinc-500">
              {formattedDate}
            </time>
            {post.author?.node?.name && (
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                By {post.author.node.name}
              </span>
            )}
          </div>

          {post.tags && post.tags.nodes && post.tags.nodes.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.nodes.map((tag, index) => (
                <span
                  key={tag.id ?? tag.slug ?? `${tag.name}-${index}`}
                  className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

