import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Dropdown, DropdownItemType } from "./Dropdown";

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const options: DropdownItemType[] = [
  {
    content: "Profile",
  },
  {
    content: "Settings",
  },
];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  items: options,
  trigger: "Выберите",
  direction: "bottom-left",
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  items: options,
  trigger: "Выберите",
  direction: "bottom-right",
};
export const TopLeft = Template.bind({});
TopLeft.args = {
  items: options,
  trigger: "Выберите",
  direction: "top-left",
};
export const TopRight = Template.bind({});
TopRight.args = {
  items: options,
  trigger: "Выберите",
  direction: "top-right",
};
