import Link from "next/link";
import type { Metadata } from "next";
import { TickerBand1, TickerBand2, TickerBand3 } from "@/app/background-sentences";
import { WhatsAppButton } from "@/app/whatsapp-button";

export const metadata: Metadata = {
  title: "Confide — Social Deduction Games on WhatsApp",
  description:
    "Play games like The Traitors, Mafia, and Survivor with friends on WhatsApp. Fully async — works across time zones, no video calls, no app downloads. 5-8 players, 5-7 days.",
  alternates: {
    canonical: "https://playconfide.com",
  },
};

const WHATSAPP_URL = "https://wa.me/351912990758?text=Hi!%20I%27d%20like%20to%20join%20a%20Confide%20session";

export default function Home() {
  return (
    <div>
      <section className="min-h-[90vh] flex items-center justify-center gradient-hero px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-pink to-secondary bg-clip-text text-transparent">
              Social Deduction Games
            </span>
            <br />
            <span>on WhatsApp.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-lg mx-auto mb-12">
            Games like The Traitors, Mafia, and Survivor — played entirely in
            your group chat. No apps. No video calls. Just you and your friends,
            scheming across time zones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-green-200 transition-all"
            >
              Join via WhatsApp
            </WhatsAppButton>
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

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            What is Confide?
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-16">
            Confide is a collection of async social deduction games designed for
            WhatsApp groups of 5-8 friends. Each game runs over 5-7 days — no
            one needs to be online at the same time. You vote, scheme, bluff, and
            betray on your own schedule.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <span className="text-5xl block mb-4">👥</span>
              <h3 className="text-xl font-bold mb-2">Gather 5-8 friends</h3>
              <p className="text-muted">
                Create a WhatsApp group — that&apos;s your game room. Works with
                friends, family, or colleagues across any time zone.
              </p>
            </div>
            <div className="text-center p-6">
              <span className="text-5xl block mb-4">🎯</span>
              <h3 className="text-xl font-bold mb-2">Pick a game</h3>
              <p className="text-muted">
                Choose from 9 games — hidden roles, political intrigue, puzzle
                solving, trading, or full-drama betrayal. From relaxed to
                ruthless.
              </p>
            </div>
            <div className="text-center p-6">
              <span className="text-5xl block mb-4">⏰</span>
              <h3 className="text-xl font-bold mb-2">Play on your schedule</h3>
              <p className="text-muted">
                Every action has 6-12 hour windows. No real-time coordination.
                Perfect for busy people and distributed friend groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TickerBand2 />

      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Why WhatsApp?
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-12">
            No app to install. No accounts to create. No calendar invites to
            coordinate. Everyone already has WhatsApp — so the barrier to play is
            zero.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50">
              <span className="text-2xl shrink-0">🌍</span>
              <div>
                <h3 className="font-bold mb-1">Works across time zones</h3>
                <p className="text-sm text-muted">
                  Friends in London, Lisbon, New York? Doesn&apos;t matter. Async
                  means everyone plays when it suits them.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50">
              <span className="text-2xl shrink-0">📵</span>
              <div>
                <h3 className="font-bold mb-1">No video calls required</h3>
                <p className="text-sm text-muted">
                  Tired of Zoom? Same. These games are text-based — play from the
                  couch, on the commute, during lunch.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50">
              <span className="text-2xl shrink-0">🔒</span>
              <div>
                <h3 className="font-bold mb-1">Private DMs for secret moves</h3>
                <p className="text-sm text-muted">
                  Vote in secret. Form alliances. Stab backs. The host manages
                  everything through private messages.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50/50">
              <span className="text-2xl shrink-0">📱</span>
              <div>
                <h3 className="font-bold mb-1">Zero friction to start</h3>
                <p className="text-sm text-muted">
                  No app downloads, no signups, no browser tabs. Message us and
                  you&apos;re playing within minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Games built for deception
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-12">
            If you love The Traitors, Mafia, Werewolf, or Survivor — these games
            are for you. Social deduction, hidden roles, and psychological
            strategy — but designed for people who can&apos;t be online at the
            same time.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { emoji: "🎭", text: "Hidden roles & traitors" },
              { emoji: "🤝", text: "Alliances that shatter" },
              { emoji: "🧩", text: "Cooperative mysteries" },
              { emoji: "💹", text: "Trading & bluffing" },
              { emoji: "👑", text: "Politics & power plays" },
              { emoji: "🏗️", text: "Build traps for friends" },
              { emoji: "🕵️", text: "Deduction & accusations" },
              { emoji: "📜", text: "Secret missions" },
              { emoji: "⚔️", text: "Elimination drama" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/30"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TickerBand3 />

      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Perfect for remote teams
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-12">
            Looking for team building games that don&apos;t involve awkward Zoom
            icebreakers? Confide games run in the background of your workweek.
            Low-effort setup, high-drama results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-transparent">
              <p className="text-3xl font-bold text-primary mb-1">5-7 days</p>
              <p className="text-sm text-muted">per game session</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-transparent">
              <p className="text-3xl font-bold text-primary mb-1">5-8 people</p>
              <p className="text-sm text-muted">per group</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-transparent">
              <p className="text-3xl font-bold text-primary mb-1">€1/person</p>
              <p className="text-sm text-muted">no subscriptions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to play?</h2>
          <p className="text-lg text-muted mb-10">
            Send us a message on WhatsApp and we&apos;ll get you into the next
            game. Takes 2 minutes — no signup forms, no waiting lists.
          </p>
          <WhatsAppButton
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#25D366] text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-green-200 transition-all"
          >
            Message us on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
