import { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "shared/ui/Code/Code";
import { HStack } from "shared/ui/Stack";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <HStack justify="center" full className={classNames("", {}, [className])}>
        <Code text={block.code} />
      </HStack>
    );
  },
);
