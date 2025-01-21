import { memo, useCallback } from "react";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleBlockComponentProps {
  block: ArticleBlock;
}

export const ArticleBlockComponent = memo(
  (props: ArticleBlockComponentProps) => {
    const { block } = props;

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return <ArticleCodeBlockComponent block={block} />;
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlockComponent block={block} />;
        case ArticleBlockType.TEXT:
          return <ArticleTextBlockComponent block={block} />;
        default:
          return null;
      }
    }, []);

    return <>{renderBlock(block)}</>;
  },
);
