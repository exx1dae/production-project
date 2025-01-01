import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-ignore
          // eslint-disable-next-line implicit-arrow-linebreak
          resolve(import("./ProfilePage")),
        1000,
      );
    }),
);
