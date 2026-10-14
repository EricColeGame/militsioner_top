export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Militsioner Wiki",
  shortName: "Militsioner",
  logoText: "M",
  tagline: "Escape Guides, Stealth Tips & Giant Policeman Mechanics",
  description: "Your ultimate Militsioner guide: escape routes, stealth strategies, giant policeman behavior, puzzle solutions, NPC interactions and demo updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://militsioner.top",
  supportEmail: "support@militsioner.top",
  gameUrl: "https://store.steampowered.com/app/1373530/Militsioner/",
  heroVideoId: "9mTPzYaq95M", // MILITSIONER by TallBoys - 11 Minutes of New Gameplay (official)
  social: {
    discord: "https://discord.gg/7gP2hCW",
    youtube: "https://www.youtube.com/@TALLBOYS",
    twitter: "https://x.com/mytallboys",
  },
  locales: ["en", "ru", "ja", "es"],
  defaultLocale: "en",
};
