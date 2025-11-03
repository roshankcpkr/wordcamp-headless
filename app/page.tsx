import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white dark:bg-black">
        {/* Background brand image (primary visual) */}
        <div className="absolute inset-0 opacity-20 md:opacity-30">
          <Image src="/logo.png" alt="Bingo Academy" fill priority className="object-contain object-center" />
        </div>
        {/* Contrast overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 dark:from-black/60 dark:via-black/40 dark:to-black/20" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 text-8xl">🏍️</div>
          <h1 className="mb-6 text-5xl font-extrabold text-black drop-shadow-sm dark:text-white sm:text-6xl md:text-7xl">
            WordCamp Headless
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-zinc-700 sm:text-2xl dark:text-zinc-200">
            Explore our amazing collection of bikes powered by Headless WordPress
            and GraphQL
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/bikes"
              className="group flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Bikes
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="rounded-full border-2 border-black px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-black/5 hover:shadow-2xl dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white via-white to-white dark:from-black dark:via-black dark:to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              What We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Discover bikes with detailed specifications, pricing, and browse our
              blog for insights and stories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Bikes Feature */}
            <Link
              href="/bikes"
              className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-black"
            >
              <div className="mb-5 text-5xl">🏍️</div>
              <h3 className="mb-2 text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                Bike Collection
              </h3>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Browse our extensive collection of bikes with detailed specifications,
                pricing, engine details, and mileage information.
              </p>
              <span className="inline-flex items-center text-orange-600 transition-colors group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300">
                Explore Bikes
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-orange-500/0 transition group-hover:ring-2 group-hover:ring-orange-500/30" />
            </Link>

            {/* Blog Feature */}
            <Link
              href="/blog"
              className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-black"
            >
              <div className="mb-5 text-5xl">📝</div>
              <h3 className="mb-2 text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                Blog Posts
              </h3>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Read our latest articles, stories, and insights. Filter by categories
                and tags to find content that interests you.
              </p>
              <span className="inline-flex items-center text-orange-600 transition-colors group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300">
                Read Blog
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-orange-500/0 transition group-hover:ring-2 group-hover:ring-orange-500/30" />
            </Link>

            {/* Technology Feature */}
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-black">
              <div className="mb-5 text-5xl">⚡</div>
              <h3 className="mb-2 text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                Headless WordPress
              </h3>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Built with Next.js, GraphQL, and Headless WordPress for a modern,
                fast, and scalable experience.
              </p>
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                Powered by GraphQL
              </span>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-orange-500/0 transition group-hover:ring-2 group-hover:ring-orange-500/30" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
