import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children?: ReactNode;
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
      className,
      children,
      theme = ButtonTheme.OUTLINE,
      square,
      size = ButtonSize.M,
      disabled,
      ...rest
    } = props;

    const mods: Mods = {
      [cls.square]: square,
      [cls[size]]: true,
      [cls.disabled]: disabled,
    };

    return (
      <button
        ref={ref} // передаем ref в button
        type="button"
        className={classNames(cls.Button, mods, [className, cls[theme]])}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }),
);
