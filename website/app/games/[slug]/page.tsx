import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGameBySlug, getAllSlugs } from "@/lib/games";

const WHATSAPP_URL =
  "https://wa.me/351912990758?text=Hi!%20I%27d%20like%20to%20join%20a%20Confide%20session";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game Not Found" };

  const desc = `Play ${game.title} on WhatsApp — ${game.description} Inspired by ${game.inspiration}. ${game.players} players, ${game.duration}, fully async. No apps needed.`;

  return {
    title: `${game.title} — Play on WhatsApp with Friends`,
    description: desc,
    openGraph: {
      title: `${game.title} — Async WhatsApp Game for ${game.players} Players`,
      description: desc,
    },
  };
}

function confrontationColor(level: string) {
  switch (level) {
    case "Low":
      return "bg-green-100 text-green-700";
    case "Low-Medium":
      return "bg-lime-100 text-lime-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    case "High":
      return "bg-orange-100 text-orange-700";
    case "Very High":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) notFound();

  const currentIndex = games.findIndex((g) => g.slug === slug);
  const prevGame = currentIndex > 0 ? games[currentIndex - 1] : null;
  const nextGame =
    currentIndex < games.length - 1 ? games[currentIndex + 1] : null;

  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Game",
            name: game.title,
            description: game.description,
            numberOfPlayers: {
              "@type": "QuantitativeValue",
              minValue: parseInt(game.players.split("-")[0]),
              maxValue: parseInt(game.players.split("-")[1]),
            },
            gamePlatform: "WhatsApp",
            genre: "Social Deduction",
            offers: {
              "@type": "Offer",
              price: "1.00",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
            provider: {
              "@type": "Organization",
              name: "Confide",
              url: "https://playconfide.com",
            },
          }),
        }}
      />
      <div className="max-w-3xl mx-auto">
        <Link
          href="/games"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-8"
        >
          ← Back to all games
        </Link>

        <div className="mb-8">
          <span className="text-6xl">{game.emoji}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">{game.title}</h1>
        <p className="text-lg text-muted mb-2">
          A {game.confrontation.toLowerCase()}-confrontation{" "}
          {game.elimination ? "elimination" : "non-elimination"} game for{" "}
          {game.players} players on WhatsApp. Inspired by {game.inspiration}.
        </p>
        <p className="text-xl text-muted mb-6 italic">
          &ldquo;{game.coreTension}&rdquo;
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            👥 {game.players} players
          </span>
          <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            📅 {game.duration}
          </span>
          <span
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${confrontationColor(
              game.confrontation
            )}`}
          >
            {game.confrontation} confrontation
          </span>
          {game.elimination ? (
            <span className="px-3 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium">
              Has eliminations
            </span>
          ) : (
            <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-medium">
              No eliminations
            </span>
          )}
        </div>

        <div className="p-6 rounded-2xl gradient-card-1 mb-10">
          <h2 className="text-lg font-bold mb-2">The Concept</h2>
          <p className="text-foreground/80 leading-relaxed">{game.concept}</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-muted mb-4">
            Everything happens on WhatsApp — the group chat is your game room,
            and private DMs with the host are where you make your secret moves.
            Each step has a multi-hour window so no one needs to be online at the
            same time.
          </p>
          <ol className="space-y-4">
            {game.howItWorks.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="pt-1 text-foreground/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {game.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 p-3 rounded-xl bg-white border border-purple-100"
              >
                <span className="text-primary font-bold">✓</span>
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-purple-100 mb-10">
          <h2 className="text-lg font-bold mb-3">At a Glance</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted">Inspired by</dt>
              <dd className="font-medium">{game.inspiration}</dd>
            </div>
            <div>
              <dt className="text-muted">Best for</dt>
              <dd className="font-medium">{game.bestFor}</dd>
            </div>
            <div>
              <dt className="text-muted">Players</dt>
              <dd className="font-medium">{game.players}</dd>
            </div>
            <div>
              <dt className="text-muted">Duration</dt>
              <dd className="font-medium">{game.duration}</dd>
            </div>
          </dl>
        </div>

        <div className="p-6 rounded-2xl bg-purple-50/50 mb-10">
          <h2 className="text-lg font-bold mb-3">
            Who is {game.title} for?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            {game.title} is perfect for {game.bestFor.toLowerCase()}. If you
            enjoy {game.inspiration.toLowerCase()} but want something you can
            play asynchronously with friends who aren&apos;t always available at
            the same time, this is your game.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            It runs entirely on WhatsApp over {game.duration} — no app
            downloads, no video calls, no scheduling. Just message when you can.
            Works great across time zones and for groups who are busy during the
            week but still want a shared experience.
          </p>
        </div>

        <div className="text-center py-8 mb-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold mb-2">
            Want to play {game.title}?
          </h2>
          <p className="text-muted mb-6">
            Message us on WhatsApp and we&apos;ll get your group started.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            Join via WhatsApp
          </a>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-purple-100">
          {prevGame ? (
            <Link
              href={`/games/${prevGame.slug}`}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              ← {prevGame.emoji} {prevGame.title}
            </Link>
          ) : (
            <span />
          )}
          {nextGame ? (
            <Link
              href={`/games/${nextGame.slug}`}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {nextGame.title} {nextGame.emoji} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
