import { memo } from "react";

import cls from "./CommentCard.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { HStack, VStack } from "shared/ui/Stack";
import { classNames } from "shared/lib/classNames/classNames";

export const CommentCardLoader = memo(() => {
  return (
    <VStack
      align="start"
      full
      className={classNames(cls.CommentCard, { [cls.loading]: true }, [])}
      gap={8}
    >
      <HStack full gap={8}>
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton width="10%" height={16} />
      </HStack>
      <Skeleton width="100%" />
    </VStack>
  );
});
