import { SidebarLink } from "@/types/types";
import { ImageIcons } from "./data";

export const links = [
  {
    id: 1,
    label: "Pricing",
    href: "/",
  },
  {
    id: 2,
    label: "Blog",
    href: "/",
  },
  {
    id: 3,
    label: "FAQ",
    href: "/",
  },
  {
    id: 4,
    label: "Become a Creator",
    href: "/",
  },
];

export const sideBarLinks: SidebarLink[] = [
  {
    id: "masterchef",
    icon: ImageIcons.cook.src,
    text: "Master Chef",
    href: "/chef",
  },
  {
    id: "shoplist",
    icon: ImageIcons.shoppingBasket.src,
    text: "Shopping List",
    href: "/shoplist",
  },
  {
    id: "bookmark",
    icon: ImageIcons.bookmark.src,
    text: "CookBook",
    href: "/cookbook",
  },
];

export const navKeys = ["pricing", "blog", "faq", "become-a-creator"];
