export interface Game {
  slug: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  inspiration: string;
  players: string;
  duration: string;
  elimination: boolean;
  confrontation: "Low" | "Low-Medium" | "Medium" | "High" | "Very High";
  bestFor: string;
  coreTension: string;
  concept: string;
  howItWorks: string[];
  highlights: string[];
  category: "whatsapp";
}

export const games: Game[] = [
  {
    slug: "the-saboteur",
    title: "The Saboteur",
    emoji: "🎭",
    tagline: "Who just made us fail... on purpose?",
    description:
      "A hidden traitor secretly sabotages group challenges while everyone tries to figure out who's been working against them.",
    inspiration: "The Mole (TV show)",
    players: "5-8",
    duration: "5-7 days",
    elimination: false,
    confrontation: "Low",
    bestFor: "Groups who dislike direct conflict; observation-lovers",
    coreTension: "Who just made us fail... on purpose?",
    concept:
      "Everyone works together on daily challenges. Each success adds money to a shared pot. One player — The Saboteur — is secretly trying to make challenges fail without getting caught. At the end, a quiz tests who's been watching most carefully.",
    howItWorks: [
      "One player is secretly assigned as The Saboteur",
      "Each day, a group challenge is posted (trivia, estimation, ranking, etc.)",
      "The Saboteur receives secret instructions on how to subtly tank the challenge",
      "Pass a challenge → money goes into the pot. Fail → money comes out",
      "On the final day, everyone answers a quiz about The Saboteur's identity",
      "Highest quiz score wins the pot",
    ],
    highlights: [
      "No eliminations — everyone plays the full game",
      "10 unique challenge types included",
      "Low confrontation — perfect for first-time groups",
      "Bot-compatible variant included",
    ],
    category: "whatsapp",
  },
  {
    slug: "secret-missions",
    title: "Secret Missions",
    emoji: "🕵️",
    tagline: "Complete your mission without anyone noticing",
    description:
      "Everyone has a secret mission to complete through normal group conversation. Social engineering at its finest.",
    inspiration: "Spyfall, social engineering",
    players: "5-8",
    duration: "5-7 days",
    elimination: false,
    confrontation: "Low-Medium",
    bestFor: "Extroverts, creative communicators, people who enjoy subtle challenges",
    coreTension: "Can I manipulate the conversation without anyone noticing?",
    concept:
      "Each player receives secret missions of increasing difficulty. Complete them through natural group interaction — make someone say a specific word, get three people to agree with you, steer the conversation to a topic. If others catch you attempting a mission, you fail it.",
    howItWorks: [
      "Each player receives tiered missions (Easy → Hard) via DM",
      "Complete missions through natural conversation in the group chat",
      "If someone calls you out mid-mission, you fail it",
      "Points awarded based on mission difficulty",
      "Nobody knows each other's missions until the end",
      "Final reveal shows who accomplished what",
    ],
    highlights: [
      "No eliminations — everyone plays all week",
      "20 missions across 4 difficulty tiers",
      "Rewards creativity and social awareness",
      "Low-tech — no tools needed beyond WhatsApp",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-alliance",
    title: "The Alliance",
    emoji: "⚔️",
    tagline: "Outwit, outplay, outlast",
    description:
      "Compete in daily challenges for immunity, then vote to eliminate. Form alliances. Betray them. Face the jury.",
    inspiration: "Survivor",
    players: "6-8",
    duration: "5-7 days",
    elimination: true,
    confrontation: "High",
    bestFor: "Competitive, strategic players who enjoy social manipulation",
    coreTension: "Who's actually with me, and who's lying to my face?",
    concept:
      "Each day: compete in a challenge for immunity, then vote someone out. Form alliances, betray them when it serves you. Last players standing face a jury of everyone they eliminated — and the jury decides the winner.",
    howItWorks: [
      "Daily immunity challenge — winner cannot be voted out",
      "After the challenge, players scheme and form alliances",
      "Secret vote to eliminate one player each night",
      "Eliminated players join The Jury",
      "Final 2 players make their case to the Jury",
      "The Jury votes on the ultimate winner",
    ],
    highlights: [
      "Full Survivor-style strategy arc",
      "7 unique challenge types",
      "Twists: Hidden Immunity Idol, Double Vote, The Swap",
      "Eliminated players still matter — they're the Jury",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-heist",
    title: "The Heist",
    emoji: "🏦",
    tagline: "Plan the job. Execute the job. Trust no one.",
    description:
      "A crew of specialists plans and executes a heist over 5 days. One player is secretly an undercover cop.",
    inspiration: "Ocean's Eleven, cooperative games with a hidden traitor",
    players: "5-7",
    duration: "5 days",
    elimination: false,
    confrontation: "Medium",
    bestFor: "Players who like narrative structure, puzzle-solving, and light deduction",
    coreTension: "We're all working together... but something keeps going wrong.",
    concept:
      "The group is a crew planning and executing a fictional heist. Each player has a specialized role (Hacker, Grifter, Driver, etc.). Together you face challenges across 5 days: Reconnaissance → Planning → Preparation → Execution → Aftermath. But one player is The Informant.",
    howItWorks: [
      "Each player gets a specialist role (Mastermind, Hacker, Grifter, Driver, Lookout)",
      "Day 1: Gather intel fragments and piece together the picture",
      "Day 2: Vote on the heist plan (3 options with different risks)",
      "Day 3: Complete individual preparation tasks",
      "Day 4: Execute the heist in 3 stages — volunteers step up",
      "Day 5: Vote on who The Informant is. Scoring based on heist outcome + detection",
    ],
    highlights: [
      "Tight 5-day narrative arc with rising tension",
      "Unique roles with specialized challenges",
      "No eliminations — everyone plays all 5 days",
      "Multiple win conditions based on heist success + betrayal detection",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-auction",
    title: "The Auction",
    emoji: "💹",
    tagline: "Trade smart. Bluff hard. Trust nobody.",
    description:
      "Trade resource cards to fulfill daily contracts. One player secretly sees tomorrow's contract before anyone else.",
    inspiration: "Pit, trading card games, stock market",
    players: "5-7",
    duration: "5 days",
    elimination: false,
    confrontation: "Medium",
    bestFor: "Analytical players, negotiators, people who enjoy deal-making and bluffing",
    coreTension: "Why does she want my Gold so badly? What does she know that I don't?",
    concept:
      "Players hold resource cards and trade with each other to fulfill daily contracts. Trades happen freely — lying about what you hold is allowed. One player (The Insider) secretly sees tomorrow's contract 12 hours early.",
    howItWorks: [
      "Each player starts with 3 random resource cards",
      "Each morning, a contract is revealed (combinations that pay out)",
      "Trade freely all day — in group chat or private DMs",
      "Lying about your hand is allowed. Breaking confirmed trades is not.",
      "The Insider sees tomorrow's contract tonight — they trade for what's valuable next",
      "End of game: richest player wins, then vote on who The Insider was",
    ],
    highlights: [
      "Pure negotiation and bluffing — no trivia or puzzles",
      "5 unique contracts with escalating stakes",
      "Lying is a core mechanic — not a violation",
      "Fully bot-compatible (all numeric/structured)",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-court",
    title: "The Court",
    emoji: "👑",
    tagline: "Everyone has a different goal. No one tells the truth.",
    description:
      "Political intrigue in a royal court. One player is King. Everyone has a secret agenda. Alliances shift every night.",
    inspiration: "Game of Thrones, Diplomacy",
    players: "6-8",
    duration: "6-7 days",
    elimination: true,
    confrontation: "Very High",
    bestFor: "Drama lovers, schemers, players who enjoy complex multi-layered social strategy",
    coreTension: "Everyone has a different goal. I don't know what anyone actually wants.",
    concept:
      "Players are nobles in a fictional royal court. One starts as King and issues daily decrees. Everyone has a secret agenda (personal win condition). Each night: Assassinate, Protect, Overthrow, Spy, or Pass.",
    howItWorks: [
      "One player starts as King — they issue a Decree each day that changes the rules",
      "Each player has a unique secret win condition (Survivor, Assassin, Kingmaker, etc.)",
      "Each night, submit one action: Assassinate, Protect, Overthrow, Spy, or Pass",
      "Assassinations have a 50% chance of success (blocked by Protection)",
      "Overthrow requires 3+ players to submit it simultaneously",
      "Multiple winners possible — agendas don't all conflict",
    ],
    highlights: [
      "8 unique secret agendas with different win conditions",
      "10 decree types for the King to choose from",
      "Multiple winners possible in every game",
      "Maximum social complexity — every conversation has hidden motives",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-double-life",
    title: "The Double Life",
    emoji: "🎭",
    tagline: "Is this person real, or are they playing me?",
    description:
      "Create a profile — real or fake. Answer daily prompts in character. Get rated. Top-rated players decide who to block.",
    inspiration: "The Circle, Catfish",
    players: "5-8",
    duration: "5-6 days",
    elimination: true,
    confrontation: "Medium",
    bestFor: "Extroverts, writers, people who enjoy performing a character",
    coreTension: "Is this person real, or are they playing me?",
    concept:
      "Players create a profile — either their real identity or a completely fake persona (a Catfish). Each day, answer prompts in character. Everyone rates each other. Top-rated players become Influencers and decide who to eliminate.",
    howItWorks: [
      "Choose: play as yourself (real) or create a fake persona (Catfish)",
      "Each day, a prompt tests personality, opinions, and storytelling",
      "Rate every other player 1-5 based on authenticity and engagement",
      "Top 2 rated become Influencers — they choose 1 player to block",
      "Blocked player's true identity is revealed",
      "Catfish who survive undetected to the end get bonus points",
    ],
    highlights: [
      "Real-or-fake identity mechanic creates constant uncertainty",
      "Voice notes and photo challenges test commitment",
      "Eliminated players still vote in the final rating",
      "Rewards both authenticity AND convincing performance",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-prophecy",
    title: "The Prophecy",
    emoji: "🔮",
    tagline: "Every clue fits... but one of them is leading you wrong.",
    description:
      "Cooperatively solve a mystery from daily clue fragments. One player receives false clues designed to mislead the group.",
    inspiration: "Mysterium, cooperative escape rooms, puzzle hunts",
    players: "5-7",
    duration: "5-6 days",
    elimination: false,
    confrontation: "Low",
    bestFor: "Puzzle lovers, cooperative players, people who enjoy mysteries and lateral thinking",
    coreTension: "Every clue fits... but one of them is leading us wrong.",
    concept:
      "A mystery must be solved. Each day, every player receives one fragment of the answer via DM and shares it. Together, they piece together the truth. But one player — The False Prophet — receives misleading fragments.",
    howItWorks: [
      "A mystery is chosen (a place, person, event, or object)",
      "Each day, players receive one clue fragment via DM",
      "Everyone shares their fragment in the group — discussion follows",
      "The False Prophet's fragments are lies that point toward a wrong answer",
      "On the final day, submit your answer + guess who The False Prophet is",
      "Correct answer = group wins. False Prophet wins if the group fails.",
    ],
    highlights: [
      "5 pre-made mysteries included (Lisbon, Marie Curie, Moon Landing, Rosetta Stone, Zero)",
      "Guide for creating custom mysteries",
      "No eliminations — fully cooperative (with one traitor)",
      "Low confrontation — perfect for puzzle-oriented groups",
    ],
    category: "whatsapp",
  },
  {
    slug: "the-gauntlet",
    title: "The Gauntlet",
    emoji: "🏗️",
    tagline: "Too easy? Nobody scores. Too hard? Nobody scores.",
    description:
      "Build obstacles for your friends. If everyone passes — too easy. If nobody passes — too hard. Only the sweet spot scores.",
    inspiration: "Ultimate Chicken Horse, Mario Maker",
    players: "5-8",
    duration: "5 days",
    elimination: false,
    confrontation: "Medium",
    bestFor: "Competitive thinkers, trivia fans, anyone who likes building traps for friends",
    coreTension:
      "If I make this too easy, nobody scores. If I make it too hard, I fail my own gauntlet.",
    concept:
      "Each round, every player builds one obstacle — a challenge the whole group must attempt. Then everyone runs the full gauntlet. Points awarded ONLY when some players clear an obstacle and others don't.",
    howItWorks: [
      "Each morning, DM the host one obstacle (trivia, puzzle, estimation, etc.)",
      "At noon, all obstacles are posted anonymously",
      "Everyone attempts every obstacle (including their own)",
      "If EVERYONE passes → 0 points (too easy)",
      "If NOBODY passes → 0 points (too hard)",
      "Points awarded only when the group splits: some pass, some fail",
    ],
    highlights: [
      "The Ultimate Chicken Horse mechanic adapted for WhatsApp",
      "5 obstacle types: Trivia, Puzzle, Estimation, Multiple Choice, Word Count",
      "Builder and Runner scores tracked separately",
      "Hero Run bonus: 3 points for being the only one to pass",
    ],
    category: "whatsapp",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getAllSlugs(): string[] {
  return games.map((g) => g.slug);
}
