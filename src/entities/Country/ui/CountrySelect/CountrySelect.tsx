import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "../../model/types/country";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = Object.entries(Country).map(([value, content]) => ({
  value,
  content,
}));

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <ListBox
        readonly={readonly}
        className={classNames("", {}, [className])}
        items={options}
        value={value}
        onChange={onChangeHandler}
        direction="right"
        horizontal
        label={t("Укажите страну")}
      />
    );
  },
);
