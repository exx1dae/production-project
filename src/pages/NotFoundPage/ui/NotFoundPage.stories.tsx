import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [storeDecorator({})];
