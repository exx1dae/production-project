import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleListItemGrid } from "./ArticleListItemGrid";

export default {
  title: "shared/ArticleListItemGrid",
  component: ArticleListItemGrid,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleListItemGrid>;

const Template: ComponentStory<typeof ArticleListItemGrid> = (args) => (
  <ArticleListItemGrid {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
