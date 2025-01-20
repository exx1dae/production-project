import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "shared/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Author = Template.bind({});
Author.args = {};
Author.decorators = [
  storeDecorator({
    user: {
      _mounted: true,
      authData: {
        id: "1",
        username: "sarkis",
      },
    },
    articleDetails: {
      isLoading: false,
      data: {
        user: {
          id: "1",
          username: "sarkis",
        },
      },
    },
  }),
];

export const NotAuthor = Template.bind({});
NotAuthor.args = {};
NotAuthor.decorators = [
  storeDecorator({
    user: {
      _mounted: true,
      authData: {
        id: "2",
        username: "exx1dae",
      },
    },
    articleDetails: {
      isLoading: false,
      data: {
        user: {
          id: "1",
          username: "sarkis",
        },
      },
    },
  }),
];
