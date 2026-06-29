import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Confide — rules for participating in our WhatsApp social games.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto prose prose-purple">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: June 2026</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">1. What Confide is</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Confide provides hosted social deduction games played via WhatsApp
          group chats. Games are entertainment experiences — not gambling. There
          are no monetary prizes. Winners receive only bragging rights and social
          recognition within their group.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">2. Eligibility</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          You must be at least 16 years old to participate. By joining a game,
          you confirm that you meet this requirement. Participants must have a
          WhatsApp account and a functioning mobile phone.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">3. Payment</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Games cost €1 per person (€0.50 for Portuguese residents). Payment is
          due before the game begins. Payments are non-refundable once a game
          has started. If a game is cancelled before it begins, a full refund
          will be provided.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">4. Game rules</h2>
        <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
          <li>Games are social experiences — play fair and respect other players</li>
          <li>Deception within game mechanics is encouraged and part of the design</li>
          <li>Harassment, discrimination, or abusive behaviour outside game mechanics is prohibited</li>
          <li>The host&apos;s rulings on game events are final</li>
          <li>Sharing private game information outside your game group is not permitted</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">5. Inactivity</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          If you miss 3 consecutive action windows without notice, you will be
          removed from the game. No refund is provided for removal due to
          inactivity. If you need to leave a game early, let the host know and
          we will accommodate where possible.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">6. Content</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          You retain ownership of any content you create during gameplay.
          However, by participating, you grant Confide permission to use
          anonymised game data (strategies, outcomes, aggregate statistics) for
          game improvement and marketing purposes. We will never publish your
          name or messages without explicit consent.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">7. Liability</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Confide provides games on an &ldquo;as is&rdquo; basis. We are not
          liable for disruptions caused by WhatsApp outages, phone issues, or
          player disputes. Our maximum liability is limited to the amount you
          paid for the affected game session.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">8. Termination</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          We reserve the right to remove any player from a game or ban them from
          future games if they violate these terms, particularly regarding
          respectful behaviour. Affected players will be notified via WhatsApp.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">9. Governing law</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          These terms are governed by the laws of Portugal. Any disputes will be
          resolved under Portuguese jurisdiction, subject to EU consumer
          protection regulations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">10. Contact</h2>
        <p className="text-foreground/80 leading-relaxed">
          Questions about these terms? Message us on WhatsApp at +351 912 990
          758.
        </p>
      </div>
    </div>
  );
}
