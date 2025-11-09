import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Program Teacher",
  description: "Program Teacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header className="flex items-center bg-gray-600 text-white h-12 px-6">
          <h1 className="text-xl font-bold">Program Teacher</h1>
        </header>

        <div className="flex min-h-screen">
          <aside className="hidden md:block w-64 bg-gray-100 border-r p-4">
            <nav className="space-y-2">
              <Link href="/" className="block p-2 rounded hover:bg-gray-200">
                Home
              </Link>
              <Link href="/warning_page" className="block p-2 rounded hover:bg-gray-200">
                Warning
              </Link>
            </nav> 
          </aside>

          {children}
        </div>
      </body>
    </html>
  );
}