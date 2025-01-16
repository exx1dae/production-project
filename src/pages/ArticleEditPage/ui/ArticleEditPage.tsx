import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";

import cls from "./ArticleEditPage.module.scss";
import { Page } from "widgets/Page/Page";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const { className } = props;

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? (
        <Text text={t("Редактирование статьи с ID")} />
      ) : (
        <Text text={t("Создание статьи")} />
      )}
    </Page>
  );
});

export default ArticleEditPage;
