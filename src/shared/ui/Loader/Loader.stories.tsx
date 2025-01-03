import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "shared/ui/Loader/Loader";

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
