import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";

import cls from "./ArticleListItemGrid.module.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Card } from "shared/ui/Card/Card";
import { Text } from "shared/ui/Text/Text";
import { HStack, VStack } from "shared/ui/Stack";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Article } from "../../model/types/article";

interface ArticleListItemGridProps {
  className?: string;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemGrid = memo((props: ArticleListItemGridProps) => {
  const { className, article, target } = props;

  return (
    <AppLink
      to={RoutePath.article_details + article.id}
      target={target}
      className={classNames(cls.item, {}, [className])}
    >
      <Card className={cls.card}>
        <VStack align="start" gap={4}>
          <div className={cls.imageWrapper}>
            <img className={cls.img} src={article.img} alt={article.title} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <HStack full justify="between">
            <Text className={cls.types} text={article.type.join(", ")} />
            <HStack gap={4} align="center">
              <Text text={String(article.views)} />
              <Icon Svg={EyeIcon} />
            </HStack>
          </HStack>
          <Text className={cls.title} text={article.title} />
        </VStack>
      </Card>
    </AppLink>
  );
});
