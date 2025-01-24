import { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "shared/ui/Code/Code";
import { HStack } from "shared/ui/Stack";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <HStack justify="center" full>
        <Code text={block.code} />
      </HStack>
    );
  },
);
