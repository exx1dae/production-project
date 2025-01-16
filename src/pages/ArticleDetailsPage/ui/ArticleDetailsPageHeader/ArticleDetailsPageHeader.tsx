import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import cls from "./ArticleDetailsPageHeader.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "../../model/selectors/getCanEditArticle";
import { getArticleDetailsData } from "entities/Article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const { className } = props;

    const onBackClick = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditClick = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
      <div
        className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
      >
        <Button onClick={onBackClick} theme={ButtonTheme.OUTLINE}>
          {t("Назад к списку")}
        </Button>
        {canEdit && (
          <Button onClick={onEditClick} theme={ButtonTheme.OUTLINE}>
            {t("Редактировать")}
          </Button>
        )}
      </div>
    );
  },
);
