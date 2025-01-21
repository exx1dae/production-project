import { memo } from "react";
import { VStack } from "shared/ui/Stack";
import { SidebarItem } from "../../ui/SidebarItem/SidebarItem";
import { SidebarItemType } from "../../model/types/sidebar";

import cls from "./SidebarItemList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemListProps {
  className?: string;
  items: SidebarItemType[];
  collapsed: boolean;
}

export const SidebarItemList = memo((props: SidebarItemListProps) => {
  const { className, items, collapsed } = props;

  return (
    <VStack
      justify="between"
      align="start"
      gap={collapsed ? 32 : 8}
      className={classNames(cls.list, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      {items.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      ))}
    </VStack>
  );
});
