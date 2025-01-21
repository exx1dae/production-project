import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export enum TextSize {
  sm = "size_sm",
  md = "size_md",
  lg = "size_lg",
  xl = "size_xl",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

type HeadingTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeaderTag: Record<TextSize, HeadingTagType> = {
  [TextSize.sm]: "h6",
  [TextSize.md]: "h3",
  [TextSize.lg]: "h2",
  [TextSize.xl]: "h1",
};

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.md,
  }: TextProps) => {
    const mods: Mods = {
      [cls[theme]]: true,
      [cls[align]]: true,
      [cls[size]]: true,
    };

    const HeadingTag = mapSizeToHeaderTag[size];

    return (
      <div className={classNames(cls.Text, mods, [className])}>
        {title && <HeadingTag className={cls.title}>{title}</HeadingTag>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  },
);
