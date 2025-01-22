import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import { ListBox } from "shared/ui/ListBox/ListBox";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t("Главная страница")}
      <ListBox
        defaultValue={t("Выберите значение")}
        onChange={(value: string) => {}}
        items={[
          {
            value: "1",
            content: "Germany",
          },
          {
            value: "2",
            content: "Italy",
          },
          {
            value: "3",
            content: "France",
            disabled: true,
          },
        ]}
      />
    </Page>
  );
};

export default MainPage;
