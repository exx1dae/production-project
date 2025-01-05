import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ArticleDetailsPage from "./ArticleDetailsPage";

export default {
  title: "articles/ArticleDetailsPage",
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
