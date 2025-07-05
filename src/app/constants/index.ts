import { HomeIcon, NotebookIcon, ThemeIcon } from "@/app/components";

/**
 * Categories replated
 */
export const CATEGORY_ALL = "All";
export const CATEGORY_DESIGN_PATTERN = "Design Pattern";
export const CATEGORY_JAVASCRIPT = "JavaScript";
export const CATEGORY_NEXTJS = "NEXT.js";
export const CATEGORY_REACT = "React";
export const CATEGORY_TYPESCRIPT = "TypeScript";
export const CATEGORY_WEB = "Web";
export const CATEGORIES = [
  CATEGORY_ALL,
  CATEGORY_DESIGN_PATTERN,
  CATEGORY_JAVASCRIPT,
  CATEGORY_REACT,
  CATEGORY_WEB,
] as const;

/**
 * Common
 */
export const APP_TITLE = "0Hun-Dev";

/**
 * Navigation related
 */
export const PATHS = {
  HOME: {
    path: "/",
    title: "Home",
  },
  POSTS: {
    path: "/posts",
    title: "Posts",
  },
  REFLECTIONS: {
    path: "/reflections",
    title: "Reflections",
  },
} as const;

export const NAVIGATION_ITEMS = [
  {
    IconComponent: HomeIcon,
    path: PATHS.HOME.path,
    hasSubitems: false,
    subitems: [],
    title: PATHS.HOME.title,
  },
  {
    IconComponent: NotebookIcon,
    path: PATHS.POSTS.path,
    hasSubitems: true,
    subitems: CATEGORIES,
    title: PATHS.POSTS.title,
  },
  // {
  //   IconComponent: NotebookIcon,
  //   path: PATHS.REFLECTIONS.path,
  //   hasSubitems: false,
  //   subitems: [],
  //   title: PATHS.REFLECTIONS.title,
  // },
  {
    IconComponent: ThemeIcon,
    path: undefined,
    hasSubitems: false,
    subitems: [],
    title: "",
  },
] as const;

/**
 * Theme related
 */
export const THEME = {
  DARK: "dark",
  LIGHT: "light",
} as const;
