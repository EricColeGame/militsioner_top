import { defineRouting } from "next-intl/routing";

/**
 * 语言集合唯一真相源：只在此处维护。
 * 其余三处必须与此保持一致：src/i18n/request.ts、src/components/language-switcher.tsx、src/locales/*.json
 */
export const locales = ["en", "ru", "ja", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
