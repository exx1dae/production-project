import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AddCommentForm from "./AddCommentForm";
import { action } from "@storybook/addon-actions";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onSendComment: action("onSendComment"),
};
Primary.decorators = [
  StoreDecorator({
    addNewComment: {
      text: "Some text",
    },
  }),
];