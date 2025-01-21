import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

import cls from "./ArticleListItemGrid.module.scss";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { HStack, VStack } from "shared/ui/Stack";

interface ArticleListItemGridSkeletonProps {
  className?: string;
}

export const ArticleListItemGridSkeleton = memo(
  (props: ArticleListItemGridSkeletonProps) => {
    const { className } = props;

    return (
      <div className={classNames(cls.item, {}, [className])}>
        <Card className={cls.card}>
          <VStack align="start" gap={4}>
            <div className={cls.imageWrapper}>
              <Skeleton className={cls.img} width={200} height={200} />
            </div>
            <HStack full justify="between">
              <Skeleton width={96} height={13} />
              <HStack gap={4} align="center">
                <Skeleton width={32} height={13} />
                <Skeleton width={24} height={13} />
              </HStack>
            </HStack>
            <Skeleton width={128} height={13} />
          </VStack>
        </Card>
      </div>
    );
  },
);
