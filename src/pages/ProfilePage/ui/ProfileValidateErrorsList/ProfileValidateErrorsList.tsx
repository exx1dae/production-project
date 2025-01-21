import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { HStack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface ProfileValidateErrorsListProps {
  validateErrors: ValidateProfileError[];
}

export const ProfileValidateErrorsList = memo(
  (props: ProfileValidateErrorsListProps) => {
    const { validateErrors } = props;
    const { t } = useTranslation();

    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
      [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректная страна"),
      [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        "Имя и фамилия обязательны",
      ),
      [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    };

    return (
      <HStack>
        {validateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
          />
        ))}
      </HStack>
    );
  },
);
