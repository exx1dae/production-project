import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";

import { memo } from "react";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { HStack, VStack } from "shared/ui/Stack";
import { CommentCardLoader } from "./CommentCardLoader";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return <CommentCardLoader />;
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      align="start"
      className={classNames(cls.CommentCard, {}, [className])}
      gap={8}
    >
      <AppLink to={RoutePath.profile.concat(comment.user.id)}>
        <HStack justify="between" full gap={8}>
          {comment.user.avatar ? (
            <Avatar size={30} src={comment.user.avatar} />
          ) : null}
          <Text title={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});
