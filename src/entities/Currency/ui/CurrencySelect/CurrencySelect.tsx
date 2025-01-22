import { classNames } from "shared/lib/classNames/classNames";
import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = Object.entries(Currency).map(([value, content]) => ({
  value,
  content,
}));

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        className={classNames("", {}, [className])}
        items={options}
        value={value}
        onChange={onChangeHandler}
        label={t("Укажите валюту")}
        direction="right"
        readonly={readonly}
        horizontal
      />
    );
  },
);
