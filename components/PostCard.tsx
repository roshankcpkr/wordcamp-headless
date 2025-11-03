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
      <article className="group h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-black">
        {/* Image */}
        {imageUrl && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
            <Image
              src={imageUrl}
              alt={post.featuredImage?.node?.altText || post.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories?.nodes?.map((category, index) => (
              <span
                key={category.id ?? category.slug ?? `${category.name}-${index}`}
                className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
              >
                {category.name}
              </span>
            ))}
          </div>

          <h3 className="mb-2 line-clamp-2 text-xl font-extrabold leading-snug text-zinc-900 transition-colors group-hover:text-orange-600 dark:text-zinc-100 dark:group-hover:text-orange-400">
            {post.title}
          </h3>

          {excerptHtml && (
            <div
              className="prose prose-sm mb-4 max-w-none line-clamp-3 text-zinc-600 dark:prose-invert dark:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: excerptHtml }}
            />
          )}

          <div className="mt-4 flex items-center justify-between">
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
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.nodes.map((tag, index) => (
                <span
                  key={tag.id ?? tag.slug ?? `${tag.name}-${index}`}
                  className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
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

