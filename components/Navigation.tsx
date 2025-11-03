"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-transparent bg-white shadow-sm dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={160} height={40} priority />
          </Link>
        </div>
      </div>
    </nav>
  );
}
