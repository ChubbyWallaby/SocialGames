import Link from "next/link";
import { TickerBand1, TickerBand2, TickerBand3 } from "@/app/background-sentences";

const WHATSAPP_URL = "https://wa.me/351912990758?text=Hi!%20I%27d%20like%20to%20join%20a%20Confide%20session";

export default function Home() {
  return (
    <div>
      <section className="min-h-[90vh] flex items-center justify-center gradient-hero px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-pink to-secondary bg-clip-text text-transparent">
              Play Together.
            </span>
            <br />
            <span>From Anywhere.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-lg mx-auto mb-12">
            Social games for friends who can&apos;t be in the same room. Runs
            entirely on WhatsApp. No apps. No downloads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-green-200 transition-all"
            >
              Join via WhatsApp
            </a>
            <Link
              href="/games"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-purple-100 transition-all"
            >
              Browse Games
            </Link>
          </div>
        </div>
      </section>

      <TickerBand1 />

      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            How It Works
          </h2>

          <div className="space-y-12">
            {[
              {
                emoji: "👥",
                title: "Gather 5-8 friends",
                desc: "Create a WhatsApp group. That's your game room.",
              },
              {
                emoji: "🎯",
                title: "Pick a game",
                desc: "9 games — from chill puzzles to full-drama betrayal.",
              },
              {
                emoji: "⏰",
                title: "Play on your schedule",
                desc: "Every action has 6-12 hour windows. Nobody needs to be glued to their phone.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <span className="text-5xl">{step.emoji}</span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TickerBand2 />

      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white/50">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            No Apps. No Downloads.
            <br />
            <span className="bg-gradient-to-r from-secondary to-pink bg-clip-text text-transparent">
              Just WhatsApp.
            </span>
          </h2>

          <p className="text-lg text-muted mb-12">
            Every game runs inside your group chat. Actions via DM. Results
            posted by the host. 5-7 days of scheming, laughing, and betraying.
          </p>

          <div className="grid grid-cols-2 gap-6 text-left max-w-lg mx-auto">
            {[
              { emoji: "🎭", text: "Hidden roles & secret missions" },
              { emoji: "🤝", text: "Alliances that shatter" },
              { emoji: "🧩", text: "Puzzles & mysteries" },
              { emoji: "💹", text: "Trading & bluffing" },
              { emoji: "👑", text: "Politics & power" },
              { emoji: "🏗️", text: "Build traps for friends" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TickerBand3 />

      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to play?</h2>
          <p className="text-lg text-muted mb-10">
            Send us a message on WhatsApp and we&apos;ll get you into the next game.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-green-200 transition-all"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
