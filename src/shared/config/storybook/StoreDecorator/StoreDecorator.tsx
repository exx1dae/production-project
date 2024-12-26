import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

const StoreDecorator = (state: DeepPartial<StateSchema>) => {
  return (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
};

export default StoreDecorator;
