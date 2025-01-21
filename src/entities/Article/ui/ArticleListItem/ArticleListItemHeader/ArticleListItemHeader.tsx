import { memo } from "react";

import { Article } from "../../../model/types/article";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { HStack } from "shared/ui/Stack";

interface ArticleListItemHeaderProps {
  article: Article;
}

export const ArticleListItemHeader = memo(
  (props: ArticleListItemHeaderProps) => {
    const { article } = props;

    return (
      <HStack full justify="between">
        <HStack gap={8}>
          <Avatar src={article.user.avatar} size={32} />
          <Text text={article.user.username} />
        </HStack>
        <Text text={article.createdAt} />
      </HStack>
    );
  },
);
