import { Fragment, memo, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ListBox.module.scss";
import { Button } from "../Button/Button";
import { ListBoxDirection } from "shared/types/ui";

export type ListBoxItemType = {
  value: string;
  content: ReactNode;
  disabled?: boolean;
};

interface ListBoxProps {
  className?: string;
  items: ListBoxItemType[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: ListBoxDirection;
  label?: string;
  horizontal?: boolean;
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom",
    label,
    horizontal,
  } = props;

  return (
    <HListBox
      as="div"
      className={classNames(cls.ListBox, {}, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
      horizontal={horizontal}
    >
      {label && <HListBox.Label>{label.concat(">")}</HListBox.Label>}
      <HListBox.Button as={Button} className={cls.trigger}>
        {value ?? defaultValue}
      </HListBox.Button>
      <HListBox.Options
        className={classNames(cls.options, {
          [cls[direction]]: direction,
          [cls.horizontal]: horizontal,
        })}
      >
        {items.map((item) => (
          <HListBox.Option
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            as={Fragment}
          >
            {({ active, disabled }) => (
              <li
                className={classNames(
                  cls.option,
                  {
                    [cls.active]: active,
                    [cls.disabled]: disabled,
                  },
                  [className],
                )}
              >
                {item.content}
              </li>
            )}
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  );
});
