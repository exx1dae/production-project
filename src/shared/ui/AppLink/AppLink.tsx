import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { forwardRef, memo } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

export const AppLink = memo(
  forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
    const {
      children,
      className,
      to,
      theme = AppLinkTheme.PRIMARY,
      ...otherProps
    } = props;

    return (
      <Link
        ref={ref}
        to={to}
        className={classNames(cls.AppLink, {}, [cls[theme], className])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }),
);
