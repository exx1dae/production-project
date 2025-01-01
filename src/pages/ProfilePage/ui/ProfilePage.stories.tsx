import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [storeDecorator({})];
