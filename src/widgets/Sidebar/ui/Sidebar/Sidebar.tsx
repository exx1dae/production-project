import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { useSelector } from "react-redux";
import { SidebarItemList } from "../../ui/SidebarItemList/SidebarItemList";
import { SidebarSwitchers } from "../../ui/SidebarSwitchers/SidebarSwitchers";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <SidebarItemList items={sidebarItemsList} collapsed={collapsed} />
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <SidebarSwitchers collapsed={collapsed} />
    </aside>
  );
});
