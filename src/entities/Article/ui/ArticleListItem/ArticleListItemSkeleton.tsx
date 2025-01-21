import { memo } from "react";

import cls from "./ArticleListItem.module.scss";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { HStack, VStack } from "shared/ui/Stack";

export const ArticleListItemSkeleton = memo(() => {
  return (
    <Card>
      <VStack gap={8}>
        <HStack full justify="between">
          <HStack gap={8}>
            <Skeleton
              className={cls.avatar}
              width={32}
              height={32}
              border="100%"
            />
            <Skeleton className={cls.username} width={75} height={13} />
          </HStack>
          <Skeleton className={cls.date} width={75} height={13} />
        </HStack>
        <VStack full align="start" gap={8}>
          <Skeleton width={150} height={13} />
          <Skeleton width={64} height={13} />
          <Skeleton width="100%" height={270} />
          <VStack full align="start" gap={4}>
            <Skeleton width="100%" height={13} />
            <Skeleton width="100%" height={13} />
            <Skeleton width="100%" height={13} />
            <Skeleton width="50%" height={13} />
          </VStack>
        </VStack>
        <HStack full justify="between">
          <Skeleton width="25%" height={24} />
          <HStack gap={8}>
            <Skeleton width={32} height={13} />
            <Skeleton width={13} height={13} />
          </HStack>
        </HStack>
      </VStack>
    </Card>
  );
});
