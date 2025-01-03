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

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
