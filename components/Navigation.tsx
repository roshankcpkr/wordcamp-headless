import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              🏍️
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              WordCamp Headless
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/bikes"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Bikes
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

