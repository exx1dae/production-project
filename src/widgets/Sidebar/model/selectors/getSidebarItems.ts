import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";

import { RoutePath } from "shared/config/routeConfig/routeConfig";

import MainIcon from "shared/assets/icons/mainIcon.svg";
import AboutIcon from "shared/assets/icons/aboutIcon.svg";
import ArticlesIcon from "shared/assets/icons/articlesIcon.svg";
import ProfileIcon from "shared/assets/icons/profileIcon.svg";

import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: "Статьи",
        authOnly: true,
      },
    );
  }
  return sidebarItemsList;
});
