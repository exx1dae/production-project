import { useTranslation } from "react-i18next";
import { memo } from "react";

import { VStack } from "shared/ui/Stack";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { CommentForm, CommentList } from "entities/Comment";
import {
  useGetArticleCommentsById,
  useSendArticleComment,
} from "../../api/articleCommentsApi";

interface ArticleCommentsProps {
  articleId: string;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
  const { t } = useTranslation();
  const { articleId } = props;

  const { data: comments, isLoading } = useGetArticleCommentsById(articleId);

  const [onSendComment] = useSendArticleComment();

  return (
    <VStack align="center" full gap={8}>
      <Text
        size={TextSize.lg}
        title={t("Комментарии")}
        align={TextAlign.CENTER}
      />
      <CommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={isLoading} />
    </VStack>
  );
});
