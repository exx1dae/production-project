import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticlesPageFilters } from "./ArticlesPageFilters";

export default {
  title: "shared/ArticlesFilters",
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
