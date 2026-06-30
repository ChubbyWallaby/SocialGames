import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Link from "next/link";
import { WhatsAppButton } from "@/app/whatsapp-button";
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
  metadataBase: new URL("https://playconfide.com"),
  title: {
    default: "Confide — Social Deduction Games on WhatsApp",
    template: "%s — Confide",
  },
  description:
    "Play social deduction games like The Traitors, Mafia, and Survivor entirely on WhatsApp. Async gameplay for 5-8 friends across any timezone. No apps needed.",
  openGraph: {
    type: "website",
    siteName: "Confide",
    title: "Confide — Social Deduction Games on WhatsApp",
    description:
      "Play social deduction games like The Traitors, Mafia, and Survivor entirely on WhatsApp. Async gameplay for 5-8 friends across any timezone. No apps needed.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confide — Social Deduction Games on WhatsApp",
    description:
      "Play social deduction games like The Traitors, Mafia, and Survivor entirely on WhatsApp. Async gameplay for 5-8 friends across any timezone. No apps needed.",
  },
  keywords: [
    "games to play on WhatsApp",
    "WhatsApp games for friends",
    "social deduction games online",
    "best social deduction games",
    "async games for groups",
    "games like The Traitors",
    "Mafia game online",
    "Werewolf game online",
    "team building games remote",
    "virtual team building games",
    "games for different time zones",
    "remote games no download",
    "hidden role games",
    "party games no app needed",
    "text based party games",
    "games to play in group chat",
    "WhatsApp group games",
    "deception games for friends",
    "confide",
    "play confide",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🎲</span>
          <span className="bg-gradient-to-r from-primary to-pink bg-clip-text text-transparent">
            Confide
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
            href="/blog"
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <WhatsAppButton
            href="https://wa.me/351912990758?text=Hi!%20I%27d%20like%20to%20join%20a%20Confide%20session"
            className="px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Join Now
          </WhatsAppButton>
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
              <span>Confide</span>
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
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Info</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-purple-100 text-center text-xs text-muted">
          © 2026 Confide. Made with 💜 in Lisbon.
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
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Confide",
    url: "https://playconfide.com",
    description:
      "Async social deduction games played entirely on WhatsApp for groups of 5-8 friends.",
    foundingLocation: {
      "@type": "Place",
      name: "Lisbon, Portugal",
    },
    sameAs: [],
  };

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {GADS_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gads-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GADS_ID}');`}
          </Script>
        </>
      )}
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
