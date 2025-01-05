import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-ignore
          // eslint-disable-next-line implicit-arrow-linebreak
          resolve(import("./ArticlesPage")),
        1000,
      );
    }),
);
