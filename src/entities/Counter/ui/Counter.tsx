import { Button } from 'shared/ui/Button/Button';
import { useDispatch } from 'react-redux';

export const Counter = () => {
  const dispatch = useDispatch();

  const increment = () => {

  };
  const decrement = () => {

  };

  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h3>
        value
      </h3>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={increment}>Increment</Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
