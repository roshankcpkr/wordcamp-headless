import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 text-8xl">🏍️</div>
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            WordCamp Headless
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-blue-100 sm:text-2xl">
            Explore our amazing collection of bikes powered by Headless WordPress
            and GraphQL
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/bikes"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:scale-105 hover:shadow-2xl"
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
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10 hover:shadow-2xl"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
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
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 dark:bg-zinc-900"
            >
              <div className="mb-4 text-5xl">🏍️</div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Bike Collection
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Browse our extensive collection of bikes with detailed specifications,
                pricing, engine details, and mileage information.
              </p>
              <span className="inline-flex items-center text-blue-600 dark:text-blue-400">
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
            </Link>

            {/* Blog Feature */}
            <Link
              href="/blog"
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 dark:bg-zinc-900"
            >
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Blog Posts
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Read our latest articles, stories, and insights. Filter by categories
                and tags to find content that interests you.
              </p>
              <span className="inline-flex items-center text-blue-600 dark:text-blue-400">
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
            </Link>

            {/* Technology Feature */}
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
              <div className="mb-4 text-5xl">⚡</div>
              <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Headless WordPress
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Built with Next.js, GraphQL, and Headless WordPress for a modern,
                fast, and scalable experience.
              </p>
              <span className="text-zinc-400 dark:text-zinc-500">
                Powered by GraphQL
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
