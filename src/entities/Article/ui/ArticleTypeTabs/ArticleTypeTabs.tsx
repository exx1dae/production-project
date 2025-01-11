import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/types/article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const { className, value, onChangeType } = props;

  const tabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("Все"),
      },
      {
        value: ArticleType.IT,
        content: t("Информационные технологии"),
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Наука"),
      },
      {
        value: ArticleType.POLITICS,
        content: t("Политика"),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      className={classNames("", {}, [className])}
      tabs={tabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
