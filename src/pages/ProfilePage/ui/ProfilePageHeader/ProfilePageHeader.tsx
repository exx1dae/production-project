import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack";

export const ProfilePageHeader = () => {
  const { t } = useTranslation("profile");
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack full justify="between">
      <Text title={t("Профиль")} />
      {canEdit && (
        <HStack>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.editBtn}
              onClick={onEdit}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap={8}>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t("Отменить")}
              </Button>
              <Button theme={ButtonTheme.BACKGROUND} onClick={onSaveEdit}>
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </HStack>
      )}
    </HStack>
  );
};
