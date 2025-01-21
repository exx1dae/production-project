import cls from "./CommentList.module.scss";
import { memo } from "react";

import { Comment } from "../../model/types/comment";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { useTranslation } from "react-i18next";
import { VStack } from "shared/ui/Stack";
import { CommentListLoader } from "../../ui/CommentList/CommentListLoader";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return <CommentListLoader />;
    }

    return (
      <VStack full gap={16}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              className={cls.comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Text text={t("Комментариев нет")} />
        )}
      </VStack>
    );
  },
);
