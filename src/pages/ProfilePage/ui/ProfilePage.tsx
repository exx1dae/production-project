import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/Page";
import { ProfileValidateErrorsList } from "./ProfileValidateErrorsList/ProfileValidateErrorsList";
import { VStack } from "shared/ui/Stack";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ name: value ?? "" }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value ?? "" }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value ?? "" }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value ?? "" }));
    },
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value ?? "" }));
    },
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(
        profileActions.updateProfile({ currency: currency ?? Currency.RUB }),
      );
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(
        profileActions.updateProfile({ country: country ?? Country.Armenia }),
      );
    },
    [dispatch],
  );

  if (!id) {
    return (
      <Page className={classNames("", {}, [className])}>
        {t("Данного пользователя не существует")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames("", {}, [className])}>
        <VStack gap={16}>
          <ProfilePageHeader />
          {validateErrors?.length && (
            <ProfileValidateErrorsList validateErrors={validateErrors} />
          )}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeUsername={onChangeUsername}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
