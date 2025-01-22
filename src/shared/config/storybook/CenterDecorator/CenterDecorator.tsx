import { Story } from "@storybook/react";

export const CenterDecorator = (story: () => Story) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    {story()}
  </div>
);
