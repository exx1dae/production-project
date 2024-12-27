import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoginForm from "./LoginForm";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: "username", password: "password" },
  }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator({
    loginForm: {
      username: "username",
      password: "password",
      error: "ERROR",
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: "username",
      password: "password",
      isLoading: true,
    },
  }),
];
