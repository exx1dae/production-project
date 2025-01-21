import { memo } from "react";
import { ArticleView } from "../../model/types/article";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { ArticleListItemGridSkeleton } from "../ArticleListItemGrid/ArticleListItemGridSkeleton";

interface ArticleListSkeletonsProps {
  limit: number;
  view: ArticleView;
}

export const ArticleListSkeletons = memo((props: ArticleListSkeletonsProps) => {
  const { limit, view } = props;

  const array = new Array(limit).fill(0);

  return (
    <>
      {array.map((_, index) =>
        view === ArticleView.LIST ? (
          // eslint-disable-next-line react/no-array-index-key
          <ArticleListItemSkeleton key={index} />
        ) : (
          // eslint-disable-next-line react/no-array-index-key
          <ArticleListItemGridSkeleton key={index} />
        ),
      )}
    </>
  );
});
