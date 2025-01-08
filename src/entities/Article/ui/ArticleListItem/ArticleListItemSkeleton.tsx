import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

import cls from "./ArticleListItem.module.scss";
import { ArticleView } from "../../model/types/article";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <div className={cls.wrapper}>
                <Skeleton
                  className={cls.avatar}
                  width={32}
                  height={32}
                  border="100%"
                />
                <Skeleton className={cls.username} width={75} height={16} />
              </div>
              <Skeleton className={cls.date} width={75} height={16} />
            </div>
            <div className={cls.body}>
              <Skeleton className={cls.title} width={150} height={16} />
              <Skeleton className={cls.img} width="100%" height={270} />
            </div>
            <div className={cls.footer}>
              <Skeleton width={100} height={32} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton className={cls.img} width={200} height={200} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton className={cls.types} width={130} height={16} />
          </div>
          <Skeleton className={cls.title} width={150} height={16} />
        </Card>
      </div>
    );
  },
);
