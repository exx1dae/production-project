import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h3 data-testid="value-title">{counterValue}</h3>
      <Button data-testid="increment-btn" onClick={increment}>
        {t("Increment")}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t("Decrement")}
      </Button>
    </div>
  );
};
