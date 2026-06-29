import Link from "next/link";
import type { Metadata } from "next";
import { games } from "@/lib/games";
import { TickerBand1, TickerBand2 } from "@/app/background-sentences";

export const metadata: Metadata = {
  title: "All Games",
  description:
    "Browse 9 unique WhatsApp social games: deduction, strategy, trading, puzzles, and political intrigue. 5-8 players, fully async, 5-7 days each.",
  openGraph: {
    title: "All Games — Confide",
    description:
      "9 async social games for WhatsApp. From chill puzzles to full-drama betrayal.",
  },
};

const WHATSAPP_URL = "https://wa.me/351912990758?text=Hi!%20I%27d%20like%20to%20join%20a%20Confide%20session";

const cardGradients = [
  "gradient-card-1",
  "gradient-card-2",
  "gradient-card-3",
  "gradient-card-4",
];

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

export default function GamesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Games
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            9 unique social games designed for WhatsApp. Each one runs 5-7 days
            and works completely async — no one needs to be online at the same
            time.
          </p>
        </div>

        <TickerBand1 />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {games.map((game, i) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className={`group block p-6 rounded-3xl ${
                cardGradients[i % cardGradients.length]
              } border border-transparent hover:border-purple-300 hover:scale-[1.02] hover:shadow-xl transition-all`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {game.elimination && (
                  <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                    Elimination
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${confrontationColor(
                    game.confrontation
                  )}`}
                >
                  {game.confrontation}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {game.title}
              </h2>
              <p className="text-sm text-muted mb-4">{game.description}</p>

              <div className="flex items-center gap-4 text-xs text-muted">
                <span>{game.players} players</span>
                <span>{game.duration}</span>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View details <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <TickerBand2 />
        </div>

        <div className="text-center mt-12 py-10">
          <p className="text-lg text-muted mb-6">
            Found your game? Get in touch and we&apos;ll set up your session.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            Register via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
