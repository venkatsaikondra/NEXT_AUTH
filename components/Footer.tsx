import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} The WALL. Built with purpose.
        </p>
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/venkatsaikondra/NEXT_AUTH" 
            target="_blank"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-black hover:underline underline-offset-4"
          >
            GitHub
          </Link>
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-600">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}