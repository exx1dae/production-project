import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { Article } from "../../model/types/article";
import { ArticleListItemHeader } from "./ArticleListItemHeader/ArticleListItemHeader";
import { ArticleListItemBody } from "./ArticleListItemBody/ArticleListItemBody";
import { ArticleListItemFooter } from "./ArticleListItemFooter/ArticleListItemFooter";
import { Card } from "shared/ui/Card/Card";
import { VStack } from "shared/ui/Stack";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, target } = props;

  return (
    <Card className={classNames("", {}, [className])}>
      <VStack align="start" gap={16}>
        <ArticleListItemHeader article={article} />
        <ArticleListItemBody article={article} />
        <ArticleListItemFooter article={article} target={target} />
      </VStack>
    </Card>
  );
});
