import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import cls from "./Authorized.module.scss";
import { HStack } from "shared/ui/Stack";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { User } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import { UserDropdown } from "./UserDropdown";

interface AuthorizedProps {
  className?: string;
  authData: User;
}

export const Authorized = memo((props: AuthorizedProps) => {
  const { className, authData } = props;
  const { t } = useTranslation();

  const navigate = useNavigate();

  const onCreateClick = useCallback(() => {
    navigate(RoutePath.articles_create);
  }, [navigate]);

  return (
    <HStack full justify="between">
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onCreateClick}
      >
        {t("Создать статью")}
      </Button>
      <Text
        theme={TextTheme.INVERTED}
        className={cls.title}
        title={t("Articles Library")}
      />
      <UserDropdown currentUser={authData} />
    </HStack>
  );
});
