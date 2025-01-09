import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Page } from "shared/ui/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };

  return <Page>{t("Главная страница")}</Page>;
};

export default MainPage;
