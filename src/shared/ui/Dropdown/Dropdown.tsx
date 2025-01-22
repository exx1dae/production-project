import { useTranslation } from "react-i18next";
import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Dropdown.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { DropdownDirection } from "shared/types/ui";
import { AppLink, AppLinkTheme } from "../AppLink/AppLink";

export type DropdownItemType = {
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
};

interface DropdownProps {
  className?: string;
  items: DropdownItemType[];
  trigger?: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { t } = useTranslation();

  const { className, items, trigger, direction = "bottom-left" } = props;

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button
        as={Button}
        theme={ButtonTheme.CLEAR}
        className={cls.trigger}
      >
        {trigger || t("Выберите элемент из списка")}
      </Menu.Button>
      <Menu.Items
        as="ul"
        className={classNames(cls.items, { [cls[direction]]: direction })}
      >
        {items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
            {({ active }) =>
              item.href ? (
                <AppLink
                  className={classNames(cls.item, { [cls.active]: active })}
                  theme={AppLinkTheme.SECONDARY}
                  to={item.href}
                >
                  {item.content}
                </AppLink>
              ) : (
                <Button
                  type="button"
                  className={classNames(cls.item, { [cls.active]: active })}
                  theme={ButtonTheme.CLEAR}
                  onClick={() => {
                    item.onClick?.();
                  }}
                >
                  {item.content}
                </Button>
              )
            }
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
});
