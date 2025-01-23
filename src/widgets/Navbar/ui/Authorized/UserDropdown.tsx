import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { User, userActions } from "entities/User";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Dropdown, DropdownItemType } from "shared/ui/Dropdown/Dropdown";
import { useDispatch } from "react-redux";

import cls from "./UserDropdown.module.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface UserDropdownProps {
  currentUser: User;
}

export const UserDropdown = memo((props: UserDropdownProps) => {
  const { currentUser } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const items: DropdownItemType[] = [
    {
      content: t("Профиль пользователя"),
      href: RoutePath.profile + currentUser.id,
    },
    {
      content: t("Выйти"),
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown
      direction="bottom-left"
      className={cls.dropdown}
      items={items}
      trigger={
        <Avatar
          size={32}
          src={
            currentUser.avatar || currentUser.username.charAt(0).toUpperCase()
          }
        />
      }
    />
  );
});
