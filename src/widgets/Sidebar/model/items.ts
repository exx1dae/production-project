import { SVGProps, VFC } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import MainIcon from "shared/assets/icons/mainIcon.svg";
import AboutIcon from "shared/assets/icons/aboutIcon.svg";
import ProfileIcon from "shared/assets/icons/profileIcon.svg";

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
};

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "Главная",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "О сайте",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Профиль",
  },
];
