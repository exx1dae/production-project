import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Tabs.module.scss";

import { memo, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "../Card/Card";
import { HStack } from "../Stack";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props;

  const onTabClickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <HStack gap={16} className={classNames("", {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={value === tab.value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          className={cls.tab}
          key={tab.value}
          onClick={onTabClickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
