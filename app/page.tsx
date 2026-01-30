import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full text-center">

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Simple Authentication page
        </h1>
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/signup" 
            className="group relative inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-black rounded-lg hover:bg-slate-800 focus:shadow-outline focus:outline-none w-full sm:w-auto"
          >
            Get started for free
          </Link>
          
          <Link 
            href="/login" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-slate-600 transition duration-200 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 w-full sm:w-auto"
          >
            Sign in
          </Link>
        </div>

       
      </div>
    </section>
  );
}