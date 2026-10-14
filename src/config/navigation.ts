import { BookOpen, Clapperboard, Gamepad2, MessagesSquare, ScrollText, Users, Wrench, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  /** 翻译键（en.json 的 nav 命名空间），同时也是 content/<locale>/ 下的分类目录名 */
  key: string;
  /** URL 路径（不含 locale 前缀） */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

/**
 * 导航配置：分类 slug 与 content/<locale>/ 下的文章目录一一对应，
 * 并与 src/lib/content.ts 的 GROUP_TITLES / GROUP_ORDER 保持同步。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "story", path: "/story", icon: ScrollText, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Gamepad2, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "media", path: "/media", icon: Clapperboard, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
