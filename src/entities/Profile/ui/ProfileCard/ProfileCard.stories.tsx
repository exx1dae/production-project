import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import avatar from "shared/assets/tests/Avatar.jpg";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    name: "Sarkis",
    lastname: "Shainyan",
    country: Country.Armenia,
    currency: Currency.RUB,
    username: "admin",
    age: 21,
    city: "Zhukovsky",
    avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: "Error",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
