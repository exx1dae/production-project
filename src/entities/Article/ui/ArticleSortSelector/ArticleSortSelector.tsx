import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import { useTranslation } from "react-i18next";

import { memo, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: "asc",
          content: t("возрастанию"),
        },
        {
          value: "desc",
          content: t("убыванию"),
        },
      ],
      [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.TITLE,
          content: t("названию"),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t("просмотрам"),
        },
        {
          value: ArticleSortField.CREATED,
          content: t("дате"),
        },
      ],
      [t],
    );

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          value={sort}
          options={sortFieldOptions}
          label={t("Сортировка по")}
          onChange={onChangeSort}
        />
        <Select
          value={order}
          options={orderOptions}
          label={t("по")}
          onChange={onChangeOrder}
        />
      </div>
    );
  },
);
