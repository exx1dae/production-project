import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "widgets/Sidebar";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Authorized = Template.bind({});
Authorized.args = {};
Authorized.decorators = [
  StoreDecorator({
    user: {
      authData: {
        username: "admin",
      },
    },
  }),
];

export const Unauthorized = Template.bind({});
Unauthorized.args = {};
Unauthorized.decorators = [
  StoreDecorator({
    user: {
      authData: undefined,
    },
  }),
];
