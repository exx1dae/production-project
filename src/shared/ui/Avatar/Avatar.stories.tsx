import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from "./Avatar";
import Image from "./Image.jpg";

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 64,
  src: Image,
};

export const Small = Template.bind({});
Small.args = {
  size: 32,
  src: Image,
};
