import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth Demo",
  description: "Simple authentication demo with a modern frontend",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <Providers>
          <div className="min-h-screen flex flex-col">
            <NavBar />

            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
