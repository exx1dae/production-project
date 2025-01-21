import { useTranslation } from "react-i18next";
import { memo } from "react";

import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";

interface ArticleDetailsErrorProps {
  className?: string;
}

export const ArticleDetailsError = memo((props: ArticleDetailsErrorProps) => {
  const { t } = useTranslation();

  return (
    <Text
      title={t("Произошла ошибка при загрузке статьи")}
      theme={TextTheme.ERROR}
      align={TextAlign.CENTER}
    />
  );
});
