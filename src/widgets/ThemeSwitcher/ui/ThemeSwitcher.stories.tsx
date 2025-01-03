import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
