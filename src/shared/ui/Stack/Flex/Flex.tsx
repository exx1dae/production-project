import { classNames } from "shared/lib/classNames/classNames";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import cls from "./Flex.module.scss";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: "start" | "center" | "end" | "between";
  align?: "start" | "center" | "end";
  direction: "row" | "column";
  gap?: 4 | 8 | 16 | 32;
  full?: boolean;
}

const justifyClasses: Record<
  Exclude<FlexProps["justify"], undefined>,
  string
> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<Exclude<FlexProps["align"], undefined>, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexProps["direction"], string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<Exclude<FlexProps["gap"], undefined>, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export const Flex = (props: FlexProps) => {
  const {
    className,
    justify = "start",
    direction = "row",
    align = "center",
    gap,
    children,
    full = false,
  } = props;

  const classes = [
    justifyClasses[justify],
    directionClasses[direction],
    alignClasses[align],
    gap && gapClasses[gap],
    className,
  ];

  const mods = {
    [cls.full]: full,
  };

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>;
};
