import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Confide — how we handle your data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto prose prose-purple">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: June 2026</p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Who we are</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Confide (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          operates the website playconfide.com and provides social deduction
          games played via WhatsApp. We are based in Lisbon, Portugal.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">What data we collect</h2>
        <p className="text-foreground/80 leading-relaxed mb-2">
          When you contact us or participate in a game, we may collect:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
          <li>Your WhatsApp phone number (required to participate)</li>
          <li>Your first name or chosen display name</li>
          <li>Messages you send during gameplay</li>
          <li>Payment information processed through third-party providers</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">How we use your data</h2>
        <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
          <li>To run game sessions you participate in</li>
          <li>To communicate game updates and results</li>
          <li>To process payments</li>
          <li>To improve our games and service</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-3">Data retention</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Game messages and participation data are retained for up to 30 days
          after a game ends, then deleted. Your phone number is retained only
          while you are an active participant or have expressed interest in
          future games. You can request deletion at any time.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Third parties</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          We use WhatsApp (Meta) as our communication platform. Your messages
          are subject to WhatsApp&apos;s own privacy policy. We do not sell or
          share your personal data with advertisers or other third parties.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Your rights (GDPR)</h2>
        <p className="text-foreground/80 leading-relaxed mb-2">
          Under EU/EEA law, you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
          <li>Access your personal data</li>
          <li>Rectify inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Data portability</li>
        </ul>
        <p className="text-foreground/80 leading-relaxed mb-4">
          To exercise these rights, message us on WhatsApp at +351 912 990 758
          or email us.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Cookies</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          This website uses only essential cookies required for functionality.
          We do not use tracking cookies or third-party advertising cookies. If
          we add analytics in the future, we will update this policy and provide
          an opt-out mechanism.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Changes to this policy</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          We may update this policy from time to time. Changes will be posted on
          this page with an updated date. Continued use of our service after
          changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-foreground/80 leading-relaxed">
          For any privacy-related questions, reach us on WhatsApp at +351 912
          990 758.
        </p>
      </div>
    </div>
  );
}
