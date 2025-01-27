import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import cls from "./CommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { commentActions, commentReducer } from "../../model/slice/commentSlice";
import { useSelector } from "react-redux";
import { getCommentText } from "../../model/selectors/getCommentText";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface CommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  comments: commentReducer,
};

const CommentForm = memo((props: CommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getCommentText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(commentActions.updateCommentText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text.trim());
    dispatch(commentActions.updateCommentText(""));
  }, [onSendComment, text, dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <HStack
        full
        justify="between"
        className={classNames(cls.CommentForm, {}, [className])}
      >
        <Input
          value={text ?? ""}
          autofocus
          placeholder={t("Введите текст")}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          disabled={text === ""}
          onClick={onSendHandler}
        >
          {t("Отправить")}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default CommentForm;
