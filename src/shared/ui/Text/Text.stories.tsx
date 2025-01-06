import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text, TextSize, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  text: "Description",
};

export const Small = Template.bind({});
Small.args = {
  title: "Title",
  text: "Description",
  size: TextSize.sm,
};

export const Medium = Template.bind({});
Medium.args = {
  title: "Title",
  text: "Description",
  size: TextSize.md,
};

export const Large = Template.bind({});
Large.args = {
  title: "Title",
  text: "Description",
  size: TextSize.lg,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "OnlyTitle",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "OnlyText",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title",
  text: "Description",
  theme: TextTheme.ERROR,
};
