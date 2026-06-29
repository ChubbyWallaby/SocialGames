import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Confide — Social Deduction Games on WhatsApp",
    short_name: "Confide",
    description:
      "Async social deduction games played entirely on WhatsApp. 5-8 players, 5-7 days, no apps needed.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf5ff",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
