import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Code } from "./Code";

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    "export default {\n" +
    '  title: "shared/Code",\n' +
    "  component: Code,\n" +
    "  argTypes: {\n" +
    '    backgroundColor: { control: "color" },\n' +
    "  },\n" +
    "} as ComponentMeta<typeof Code>;\n" +
    "\n" +
    "const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;",
};
