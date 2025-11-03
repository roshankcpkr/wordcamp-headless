import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo.png" alt="Logo" width={160} height={40} />
            </Link>
            <p className="max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              Bingo Labs: Where Ideas Play and Solutions Win! We provide cutting-edge
              solutions to help businesses thrive and grow.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              About Us
            </h3>
            <p className="max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              We build experiences, run experiments, and create products using modern web,
              cloud and AI technologies. From apps to SAAS, we deliver secure, scalable
              solutions.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/company/bingo-labs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-orange-500 dark:hover:text-orange-400"
              >
                {/* LinkedIn */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.07V24h-4v-6.67c0-1.59-.03-3.64-2.22-3.64-2.23 0-2.57 1.73-2.57 3.52V24h-4V8z"/>
                </svg>
                LinkedIn
              </Link>
              <Link
                href="https://www.facebook.com/bingolabs.ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-orange-500 dark:hover:text-orange-400"
              >
                {/* Facebook */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.696h-3.123V24h6.125C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z"/>
                </svg>
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/bingolabsltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-orange-500 hover:text-orange-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-orange-500 dark:hover:text-orange-400"
              >
                {/* Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.426.403a4.92 4.92 0 0 1 1.78 1.154 4.92 4.92 0 0 1 1.154 1.78c.163.456.347 1.256.403 2.426.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.426a4.92 4.92 0 0 1-1.154 1.78 4.92 4.92 0 0 1-1.78 1.154c-.456.163-1.256.347-2.426.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.426-.403a4.92 4.92 0 0 1-1.78-1.154 4.92 4.92 0 0 1-1.154-1.78c-.163-.456-.347-1.256-.403-2.426C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.426A4.92 4.92 0 0 1 3.79 2.944 4.92 4.92 0 0 1 5.57 1.79c.456-.163 1.256-.347 2.426-.403C9.262 1.329 9.642 1.317 12 1.317zm0 1.62c-3.17 0-3.548.012-4.796.07-.994.046-1.532.21-1.888.349-.476.185-.816.406-1.173.763-.357.357-.578.697-.763 1.173-.139.356-.303.894-.349 1.888-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.046.994.21 1.532.349 1.888.185.476.406.816.763 1.173.357.357.697.578 1.173.763.356.139.894.303 1.888.349 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c.994-.046 1.532-.21 1.888-.349.476-.185.816-.406 1.173-.763.357-.357.578-.697.763-1.173.139-.356.303-.894.349-1.888.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.046-.994-.21-1.532-.349-1.888a3.298 3.298 0 0 0-.763-1.173 3.298 3.298 0 0 0-1.173-.763c-.356-.139-.894-.303-1.888-.349-1.248-.058-1.626-.07-4.796-.07zm0 3.892a4.946 4.946 0 1 1 0 9.892 4.946 4.946 0 0 1 0-9.892zm0 8.168a3.222 3.222 0 1 0 0-6.444 3.222 3.222 0 0 0 0 6.444zm6.406-9.89a1.155 1.155 0 1 1 0-2.31 1.155 1.155 0 0 1 0 2.31z"/>
                </svg>
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          © {new Date().getFullYear()} Bingo Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


