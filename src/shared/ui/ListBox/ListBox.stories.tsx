import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ListBox, ListBoxItemType } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

const items: ListBoxItemType[] = [
  {
    value: "1",
    content: "Italy",
  },
  {
    value: "2",
    content: "Germany",
  },
  {
    value: "3",
    content: "France",
  },
];

export const Bottom = Template.bind({});
Bottom.args = {
  items,
  defaultValue: "Выберите страну",
};

export const Right = Template.bind({});
Right.args = {
  items,
  defaultValue: "Выберите страну",
  direction: "right",
};

export const Left = Template.bind({});
Left.args = {
  items,
  defaultValue: "Выберите страну",
  direction: "left",
};

export const Top = Template.bind({});
Top.args = {
  items,
  defaultValue: "Выберите страну",
  direction: "top",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  items,
  defaultValue: "Выберите страну",
  direction: "bottom",
  horizontal: true,
};

export const Label = Template.bind({});
Label.args = {
  items,
  defaultValue: "Выберите страну",
  direction: "bottom",
  horizontal: true,
  label: "Выберите название",
};
