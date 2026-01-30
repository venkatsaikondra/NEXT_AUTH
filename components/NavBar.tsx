"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      {/* Brand Accent Line */}
      <div className="h-1 w-full bg-orange-400" />
      
      <nav className="border-b border-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="group flex items-center gap-1 text-xl font-bold tracking-tighter">
            <span className="text-black">The</span>
            <span className="rounded bg-black px-1.5 py-0.5 text-white transition-colors group-hover:bg-orange-500">WALL</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              Sign in
            </Link>
            <Link 
              href="/signup" 
              className="inline-flex h-9 items-center justify-center rounded-lg bg-black px-4 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}