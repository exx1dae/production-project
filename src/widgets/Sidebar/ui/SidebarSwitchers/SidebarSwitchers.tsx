import { memo } from "react";

import cls from "./SidebarSwitchers.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { HStack, VStack } from "shared/ui/Stack";

interface SidebarSwitchersProps {
  collapsed: boolean;
}

export const SidebarSwitchers = memo((props: SidebarSwitchersProps) => {
  const { collapsed } = props;

  const content = (
    <>
      <ThemeSwitcher />
      <LangSwitcher short={collapsed} />
    </>
  );

  return collapsed ? (
    <VStack
      full
      align="center"
      gap={8}
      justify="center"
      className={cls.switchers}
    >
      {content}
    </VStack>
  ) : (
    <HStack full gap={16} justify="center" className={cls.switchers}>
      {content}
    </HStack>
  );
});
