import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <span className="text-6xl mb-6 block">🎉</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          In-Person Events
        </h1>
        <p className="text-lg text-muted mb-4">
          Live social game nights hosted in your city. The same games you love
          online — but face-to-face, with drinks, and higher stakes.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-secondary text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Coming Soon — Lisbon 2026
        </div>
        <div className="p-6 rounded-2xl gradient-card-2 max-w-md mx-auto mb-8">
          <h3 className="font-bold mb-2">What to expect</h3>
          <ul className="text-sm text-left space-y-2 text-foreground/80">
            <li className="flex gap-2">
              <span>🍸</span> Hosted at bars and event spaces
            </li>
            <li className="flex gap-2">
              <span>🎭</span> 15-30 players per event
            </li>
            <li className="flex gap-2">
              <span>⏱️</span> 2-3 hour single-session games
            </li>
            <li className="flex gap-2">
              <span>🏆</span> Prizes and bragging rights
            </li>
          </ul>
        </div>
        <p className="text-sm text-muted mb-6">
          Want to be first to know when events launch?
        </p>
        <Link
          href="/games"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all"
        >
          Play online while you wait →
        </Link>
      </div>
    </div>
  );
}
