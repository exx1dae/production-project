import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";

interface ArticleEmptyStateProps {
  className?: string;
}

export const ArticleEmptyState = memo((props: ArticleEmptyStateProps) => {
  const { t } = useTranslation();

  return (
    <Text
      align={TextAlign.CENTER}
      size={TextSize.lg}
      title={t("Статьи не найдены")}
    />
  );
});
