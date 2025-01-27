import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { ArticleList, ArticleView } from "entities/Article";
import { VStack } from "shared/ui/Stack";

import cls from "./ArticleRecommendations.module.scss";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendations = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data: articles, isLoading } = useArticleRecommendationsList(4);

    if (isLoading) return null;

    return (
      <VStack full gap={8} className={classNames("", {}, [className])}>
        <Text
          size={TextSize.lg}
          title={t("Рекоммендации")}
          align={TextAlign.CENTER}
        />
        <ArticleList
          className={cls.recommendations}
          articles={articles}
          isLoading={isLoading}
          view={ArticleView.GRID}
          target="_blank"
        />
      </VStack>
    );
  },
);
