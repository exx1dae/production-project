import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    isLoading,
    error,
    className,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("Произошла непредвиденная ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          value={data?.username}
          placeholder={t("Ваше пользовательское имя")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.name}
          placeholder={t("Ваше имя")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t("Ваш возраст")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t("Ваш город")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Ваше изображение профиля")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
