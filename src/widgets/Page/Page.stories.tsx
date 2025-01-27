import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Page } from "./Page";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Page",
  component: Page,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div style={{ border: "1px solid red" }}>
      <h1>Hello, World!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi,
        aspernatur inventore odio officia ratione tempora. Alias, assumenda
        doloremque eum excepturi explicabo, in nesciunt nostrum obcaecati saepe
        similique soluta vero.
      </p>
    </div>
  ),
};
Primary.decorators = [
  storeDecorator({
    scrollSave: {
      scroll: {
        someRoute: 5,
      },
    },
  }),
];
