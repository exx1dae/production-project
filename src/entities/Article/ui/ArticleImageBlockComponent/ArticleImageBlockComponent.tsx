import cls from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { VStack } from "shared/ui/Stack";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ block, className }: ArticleImageBlockComponentProps) => {
    return (
      <VStack
        gap={8}
        align="center"
        full
        className={classNames("", {}, [className])}
      >
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </VStack>
    );
  },
);
