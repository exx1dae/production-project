import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePage from "./ProfilePage";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/Avatar.jpg";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  storeDecorator({
    profile: {
      form: {
        name: "Sarkis",
        lastname: "Shainyan",
        country: Country.Armenia,
        currency: Currency.RUB,
        username: "admin",
        age: 21,
        city: "Zhukovsky",
        avatar,
      },
    },
  }),
];
