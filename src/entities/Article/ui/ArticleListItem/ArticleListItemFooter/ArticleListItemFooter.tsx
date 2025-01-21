import { HTMLAttributeAnchorTarget, memo } from "react";
import { HStack } from "shared/ui/Stack";
import { Article } from "../../../model/types/article";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "../../ui/ArticleListItem/ArticleListItem.module.scss";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { useTranslation } from "react-i18next";

interface ArticleListItemFooterProps {
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemFooter = memo(
  (props: ArticleListItemFooterProps) => {
    const { article, target } = props;

    const { t } = useTranslation();

    return (
      <HStack full justify="between">
        <AppLink to={RoutePath.article_details + article.id} target={target}>
          <Button theme={ButtonTheme.OUTLINE}>{t("Читать далее")}</Button>
        </AppLink>
        <HStack gap={8}>
          <Text className={cls.views} text={String(article.views)} />
          <Icon className={cls.icon} Svg={EyeIcon} />
        </HStack>
      </HStack>
    );
  },
);
