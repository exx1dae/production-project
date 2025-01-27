import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { VStack } from "shared/ui/Stack";
import { ProfileCardLoader } from "../../ui/ProfileCardLoader/ProfileCardLoader";
import { ProfileCardError } from "../../ui/ProfileCardError/ProfileCardError";

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
    return <ProfileCardLoader />;
  }

  if (error) {
    return <ProfileCardError />;
  }

  return (
    <VStack
      align="start"
      full
      gap={16}
      className={classNames(cls.ProfileCard, {}, [className])}
    >
      {data?.avatar && <Avatar className={cls.avatar} src={data.avatar} />}
      <Input
        value={data?.username}
        placeholder={t("Ваше пользовательское имя")}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.name}
        placeholder={t("Ваше имя")}
        readonly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        value={data?.lastname}
        placeholder={t("Ваша фамилия")}
        readonly={readonly}
        onChange={onChangeLastname}
      />
      <Input
        value={data?.age}
        placeholder={t("Ваш возраст")}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t("Ваш город")}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.avatar}
        placeholder={t("Ваше изображение профиля")}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        value={data?.country}
        readonly={readonly}
        onChange={onChangeCountry}
      />
    </VStack>
  );
};
