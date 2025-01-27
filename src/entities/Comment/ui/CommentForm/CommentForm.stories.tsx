import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CommentForm from "./CommentForm";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "entities/Comment/CommentForm",
  component: CommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => (
  <CommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  storeDecorator({
    comments: {
      text: "",
    },
  }),
];
