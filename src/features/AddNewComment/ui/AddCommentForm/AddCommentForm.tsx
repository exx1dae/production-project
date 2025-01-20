import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import cls from "./AddCommentForm.module.scss";
import { getAddCommentText } from "../../model/selectors/AddNewCommentSelectors";
import {
  addNewCommentActions,
  addNewCommentReducer,
} from "../../model/slice/addNewCommentSlice";

import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentText);

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addNewCommentActions.setText(value));
      },
      [dispatch],
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || "");
      onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
          <Input
            value={text}
            placeholder={t("Введите текст")}
            onChange={onCommentTextChange}
            className={cls.input}
          />
          <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
            {t("Отправить")}
          </Button>
        </div>
      </DynamicModuleLoader>
    );
  },
);

export default AddCommentForm;
