import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleRecommendations } from "./ArticleRecommendations";

export default {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendations,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => (
  <ArticleRecommendations {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
