import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-muted mb-8">
          This page doesn&apos;t exist — maybe the traitor deleted it. Let&apos;s
          get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Go home
          </Link>
          <Link
            href="/games"
            className="px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-xl hover:bg-purple-50 transition-colors"
          >
            Browse games
          </Link>
        </div>
      </div>
    </div>
  );
}
