import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CommentList } from "./CommentList";
import { Comment } from "entities/Comment";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

const comments: Comment[] = [
  {
    id: "1",
    // eslint-disable-next-line max-len
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque dolor, doloremque esse, ex facilis illo inventore magnam mollitia nihil nulla odit officia officiis pariatur praesentium qui, veritatis. Nostrum, sint.",
    user: {
      id: "1",
      username: "username",
    },
  },
  {
    id: "2",
    // eslint-disable-next-line max-len
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque dolor, doloremque esse, ex facilis illo inventore magnam mollitia nihil nulla odit officia officiis pariatur praesentium qui, veritatis. Nostrum, sint.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque dolor, doloremque esse, ex facilis illo inventore magnam mollitia nihil nulla odit officia officiis pariatur praesentium qui, veritatis. Nostrum, sint.",
    user: {
      id: "1",
      username: "username",
    },
  },
];

export const Primary = Template.bind({});
Primary.args = {
  comments,
};

export const Loading = Template.bind({});
Loading.args = {
  comments,
  isLoading: true,
};
