import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Card } from "./Card";
import { Text } from "../Text/Text";

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  // eslint-disable-next-line react/destructuring-assignment
  <Card {...args}>{args.children}</Card>
);

export const Primary = Template.bind({});
Primary.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title="Title" text="Text" />,
};
