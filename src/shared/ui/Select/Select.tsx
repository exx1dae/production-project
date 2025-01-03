import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export type SelectOption = {
  value: string;
  content: string;
};

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const mods: Mods = {};

  const { className, label, options, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => {
    return options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
      >
        {optionsList}
      </select>
    </div>
  );
});
