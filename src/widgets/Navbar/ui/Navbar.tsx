import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Authorized } from "./Authorized/Authorized";
import { Unauthorized } from "./Unauthorized/Unauthorized";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      {authData ? <Authorized authData={authData} /> : <Unauthorized />}
    </div>
  );
});
