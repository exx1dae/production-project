import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CommentCard } from "./CommentCard";
import { Comment } from "entities/Comment";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

const comment: Comment = {
  id: "1",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
    "Architecto atque dolor, doloremque esse, ex facilis illo inventore magnam " +
    "mollitia nihil nulla odit officia officiis pariatur praesentium qui, veritatis. " +
    "Nostrum, sint.",
  user: {
    id: "1",
    username: "username",
  },
};

export const Primary = Template.bind({});
Primary.args = {
  comment,
};

export const Loading = Template.bind({});
Loading.args = {
  comment,
  isLoading: true,
};
