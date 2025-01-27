import cls from "./CommentList.module.scss";
import { memo } from "react";

import { Comment } from "../../model/types/comment";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { useTranslation } from "react-i18next";
import { HStack, VStack } from "shared/ui/Stack";
import { CommentListLoader } from "../../ui/CommentList/CommentListLoader";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { commentReducer } from "../../model/slice/commentSlice";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const reducers: ReducersList = {
  comments: commentReducer,
};

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return <CommentListLoader />;
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <VStack full gap={16} className={classNames("", {}, [className])}>
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
            <HStack full justify="center">
              <Text align={TextAlign.CENTER} text={t("Комментариев нет")} />
            </HStack>
          )}
        </VStack>
      </DynamicModuleLoader>
    );
  },
);
