import { lazy } from 'react';

export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(
      () =>
      // @ts-ignore
      // eslint-disable-next-line implicit-arrow-linebreak
        resolve(import('./MainPage')),
      5000,
    );
  }),
);
