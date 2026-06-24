import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Games — Play Together, Anywhere",
  description:
    "WhatsApp-based social games and in-person events for groups of 5-8 players. Fully async, no apps needed.",
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🎲</span>
          <span className="bg-gradient-to-r from-primary to-pink bg-clip-text text-transparent">
            Social Games
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/games"
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            Games
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            href="/games"
            className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-light transition-colors"
          >
            Play Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-purple-100 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold mb-3">
              <span className="text-xl">🎲</span>
              <span>Social Games</span>
            </div>
            <p className="text-sm text-muted">
              Play together from anywhere. No apps, no downloads — just
              WhatsApp and your friends.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Play</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/games" className="hover:text-primary transition-colors">
                  WhatsApp Games
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  In-Person Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Info</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">
                  How It Works
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">
                  FAQ
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-purple-100 text-center text-xs text-muted">
          © 2026 Social Games. Made with 💜 in Lisbon.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
