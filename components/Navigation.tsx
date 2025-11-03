"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-transparent bg-white shadow-sm dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={160} height={40} priority />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/bikes"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
            >
              Bikes
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
            >
              Blog
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:text-orange-600 focus:outline-none md:hidden dark:text-zinc-300 dark:hover:text-orange-400"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex flex-col gap-2">
              <Link
                href="/bikes"
                className="rounded-md px-3 py-2 text-base font-medium text-zinc-800 hover:bg-zinc-100 hover:text-orange-600 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-orange-400"
                onClick={() => setOpen(false)}
              >
                Bikes
              </Link>
              <Link
                href="/blog"
                className="rounded-md px-3 py-2 text-base font-medium text-zinc-800 hover:bg-zinc-100 hover:text-orange-600 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-orange-400"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

