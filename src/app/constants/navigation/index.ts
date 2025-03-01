import HomeIcon from "@/app/components/atoms/icon/HomeIcon";
import NotebookIcon from "@/app/components/atoms/icon/NotebookIcon";
import ThemeIcon from "@/app/components/atoms/icon/ThemeIcon";
import { CATEGORIES } from "@/app/constants/posts";

export const PATH_HOME = { path: "/", title: "Home" };
export const PATH_POSTS = { path: "/posts", title: "Posts" };
export const SIDE_NAVIGATION_ITEMS = [
  {
    IconComponent: HomeIcon,
    path: PATH_HOME.path,
    hasSubitems: false,
    subitems: [],
    title: PATH_HOME.title,
  },
  {
    IconComponent: NotebookIcon,
    path: PATH_POSTS.path,
    hasSubitems: true,
    subitems: CATEGORIES,
    title: PATH_POSTS.title,
  },
  {
    IconComponent: ThemeIcon,
    path: undefined,
    hasSubitems: false,
    subitems: [],
    title: "",
  },
];
