import Link from "next/link";
import { games } from "@/lib/games";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className={`group block p-6 rounded-3xl ${
                cardGradients[i % cardGradients.length]
              } border border-transparent hover:border-purple-300 hover:scale-[1.02] hover:shadow-xl transition-all`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{game.emoji}</span>
                <div className="flex gap-2">
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
              </div>

              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {game.title}
              </h2>
              <p className="text-sm text-muted mb-4">{game.description}</p>

              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  👥 {game.players}
                </span>
                <span className="flex items-center gap-1">
                  📅 {game.duration}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View details <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
