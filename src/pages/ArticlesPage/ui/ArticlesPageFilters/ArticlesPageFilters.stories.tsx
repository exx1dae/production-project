import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticlesPageFilters } from "./ArticlesPageFilters";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleSortField, ArticleType } from "entities/Article";

export default {
  title: "pages/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  storeDecorator({
    articlesPage: {
      search: "",
      type: ArticleType.ALL,
      order: "asc",
      sort: ArticleSortField.TITLE,
    },
  }),
];
