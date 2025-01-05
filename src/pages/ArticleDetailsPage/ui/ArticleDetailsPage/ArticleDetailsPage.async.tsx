import { lazy } from "react";

export const ArticleDetailsPage = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-ignore
          // eslint-disable-next-line implicit-arrow-linebreak
          resolve(import("./ArticleDetailsPage")),
        1000,
      );
    }),
);
