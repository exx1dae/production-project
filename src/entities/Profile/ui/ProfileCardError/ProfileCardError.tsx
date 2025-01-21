import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCardError.module.scss";
import { VStack } from "shared/ui/Stack";

interface ProfileCardErrorProps {
  className?: string;
}

export const ProfileCardError = memo((props: ProfileCardErrorProps) => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <VStack
      align="center"
      justify="center"
      full
      gap={16}
      className={classNames(cls.ProfileCardError, {}, [className])}
    >
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t("Произошла непредвиденная ошибка при загрузке профиля")}
        text={t("Попробуйте обновить страницу")}
      />
    </VStack>
  );
});
