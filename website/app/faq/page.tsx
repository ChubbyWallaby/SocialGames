import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — How to Play Social Games on WhatsApp",
  description: "How does Confide work? Learn about async WhatsApp group games, pricing, time zones, game types, and how to join a social deduction game with friends.",
};

const WHATSAPP_URL = "https://wa.me/351912990758?text=Hi!%20I%20have%20a%20question%20about%20Confide";

const faqs = [
  {
    q: "What do I need to play?",
    a: "Just WhatsApp. No apps to download, no accounts to create. If you can send a message, you can play.",
  },
  {
    q: "How many people do I need?",
    a: "Between 5 and 8 players per game. You can sign up solo and we'll match you with a group, or bring your own friends.",
  },
  {
    q: "How long does a game last?",
    a: "Most games run 5-7 days. You don't need to be online at specific times — every action has a multi-hour window (6-12 hours), so you play on your own schedule.",
  },
  {
    q: "Do I need to be online at specific times?",
    a: "No. Everything is async. You'll get messages and have hours to respond. Nobody needs to be glued to their phone.",
  },
  {
    q: "What happens if I miss a turn?",
    a: "One missed window: friendly reminder, no penalty. Two consecutive: your action defaults to skip. Three consecutive: you're removed from the game. Life happens — we're flexible.",
  },
  {
    q: "How much does it cost?",
    a: "€1 per person (€0.50 if you're Portuguese). That's it — no subscriptions, no hidden fees.",
  },
  {
    q: "What kind of games are these?",
    a: "Social deduction, strategy, trading, puzzles, and political intrigue — all designed for WhatsApp group chats. Think Survivor, The Mole, or Mafia, but async and playable from anywhere.",
  },
  {
    q: "Can I play if I'm in a different timezone from my group?",
    a: "Absolutely. The async design means timezone differences don't matter. Action windows are long enough for everyone to participate regardless of where they are.",
  },
  {
    q: "How do I sign up?",
    a: "Message us on WhatsApp. We'll tell you about the next available session, explain the game, and get you set up. Takes 2 minutes.",
  },
  {
    q: "Can I host my own game?",
    a: "Yes! All our game handbooks are available. If you want to host for your own group, we can walk you through it.",
  },
  {
    q: "What if I've never played anything like this before?",
    a: "Perfect. We recommend starting with The Saboteur — it's low confrontation, no eliminations, and easy to learn. Most people get hooked after their first game.",
  },
  {
    q: "Is there any competition or prizes?",
    a: "The games are competitive but the prize is bragging rights and the social experience. No money involved — just pure fun and drama.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            How do social deduction games work on WhatsApp? What do you need to
            play? Here&apos;s everything you need to know about Confide —
            async group games for friends, families, and remote teams.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-purple-100"
            >
              <h2 className="text-lg font-bold mb-2">{faq.q}</h2>
              <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 py-10">
          <p className="text-lg text-muted mb-6">
            Still have questions?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
