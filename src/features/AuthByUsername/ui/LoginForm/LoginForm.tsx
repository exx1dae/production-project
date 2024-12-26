import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import i18n from "i18next";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && (
        <Text
          text={i18n.t("Вы ввели неверный логин или пароль")}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        placeholder={t("Введите имя")}
        type="text"
        className={cls.input}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t("Введите пароль")}
        type="password"
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.CLEAR}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
