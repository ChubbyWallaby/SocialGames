const row1 = [
  "I can't believe you would betray mom like that",
  "Who voted for me?!",
  "I swear I'm not the saboteur",
  "Trust me, I have Gold",
  "The prophecy was a lie all along",
  "Someone here is lying",
  "I saw what you did last round",
  "Nobody suspects a thing",
  "Wait... you're the informant?!",
  "This changes everything",
  "3 people just voted together. Sus.",
  "My mission is almost complete",
];

const row2 = [
  "Why does she want my cards so badly?",
  "I'm forming an alliance... for now",
  "The King decrees: no alliances today",
  "I need that resource, name your price",
  "The jury will remember this",
  "Is anyone else confused by that clue?",
  "Too easy? Nobody scores.",
  "That obstacle was EVIL",
  "You promised you wouldn't vote for me",
  "I knew it was you from day one",
  "I'm playing as myself... or am I?",
  "Don't trust anyone in this group",
];

const row3 = [
  "She's been quiet all day. That's suspicious.",
  "I have proof. Check your DMs.",
  "The host is definitely messing with us",
  "New alliance? You, me, and nobody else knows",
  "I literally screamed when I read that",
  "Okay who snitched",
  "This is the best game we've ever played",
  "I'm not the mole but I know who is",
  "Plot twist: it was you all along",
  "Day 3 and I trust nobody",
  "Read that message again. Slowly.",
  "We need to talk. Privately.",
];

function TickerRow({ items, direction, color }: { items: string[]; direction: "left" | "right"; color: string }) {
  const doubled = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden whitespace-nowrap py-3 pointer-events-none select-none">
      <div
        className={`inline-flex gap-6 ${direction === "left" ? "animate-ticker-left" : "animate-ticker-right"}`}
      >
        {doubled.map((text, i) => (
          <span
            key={i}
            className="text-sm font-medium px-4 py-1.5 rounded-full border shrink-0"
            style={{ color, borderColor: `${color}40`, backgroundColor: `${color}0a` }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TickerBand1() {
  return <TickerRow items={row1} direction="left" color="#7c3aed" />;
}

export function TickerBand2() {
  return <TickerRow items={row2} direction="right" color="#ec4899" />;
}

export function TickerBand3() {
  return <TickerRow items={row3} direction="left" color="#f97316" />;
}
