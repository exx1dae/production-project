import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { EditableProfileCardHeader } from "./EditableProfileCardHeader";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "features/EditableProfileCard/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = () => (
  <EditableProfileCardHeader />
);

export const Editable = Template.bind({});
Editable.args = {};
Editable.decorators = [
  storeDecorator({
    user: {
      authData: {
        id: "1",
      },
    },
    profile: {
      isLoading: false,
      data: {
        id: "1",
      },
      form: {
        id: "1",
      },
      readonly: false,
    },
  }),
];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "1",
};
ReadOnly.decorators = [
  storeDecorator({
    user: {
      authData: {
        id: "2",
      },
    },
    profile: {
      isLoading: false,
      data: {
        id: "1",
      },
      form: {
        id: "1",
      },
      readonly: true,
    },
  }),
];
