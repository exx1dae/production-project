import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { articleDetailsSliceReducer } from "../../model/slice/articleDetailsSlice";
import { memo, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";

import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import DateIcon from "shared/assets/icons/dateIcon.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlockComponent } from "../ArticleBlockComponent/ArticleBlockComponent";
import { HStack, VStack } from "shared/ui/Stack";
import { ArticleDetailsError } from "./ArticleDetailsError";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsSliceReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = <ArticleDetailsSkeleton />;
  } else if (error) {
    content = <ArticleDetailsError />;
  } else {
    content = (
      <VStack gap={16}>
        <HStack full justify="center">
          <Avatar size={128} src={article?.img} />
        </HStack>
        <VStack gap={4} full align="start">
          <Text
            align={TextAlign.LEFT}
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.lg}
          />
          <HStack gap={8}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap={8}>
            <Icon Svg={DateIcon} />
            <Text text={String(article?.createdAt)} />
          </HStack>
        </VStack>
        <VStack gap={8}>
          {article?.blocks.map((block) => (
            <ArticleBlockComponent key={block.id} block={block} />
          ))}
        </VStack>
      </VStack>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
