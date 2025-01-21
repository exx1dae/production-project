import { memo } from "react";

import cls from "./ArticleListItemBody.module.scss";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
} from "../../../model/types/article";
import { VStack } from "shared/ui/Stack";

interface ArticleListItemBodyProps {
  article: Article;
}

export const ArticleListItemBody = memo((props: ArticleListItemBodyProps) => {
  const { article } = props;

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock;

  return (
    <VStack align="start" gap={8}>
      <Text align={TextAlign.LEFT} title={article.title} />
      <Text align={TextAlign.LEFT} text={article.type.join(", ")} />
      <img className={cls.img} src={article.img} alt={article.title} />
      {textBlock && (
        <ArticleTextBlockComponent
          className={cls.textBlock}
          block={textBlock}
        />
      )}
    </VStack>
  );
});
