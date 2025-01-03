import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  options: [
    { value: "123", content: "First el" },
    { value: "456", content: "Second el" },
    { value: "789", content: "Third el" },
  ],
};
