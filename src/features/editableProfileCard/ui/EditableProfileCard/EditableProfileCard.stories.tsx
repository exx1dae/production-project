import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { EditableProfileCard } from "./EditableProfileCard";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Profile } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export default {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
  <EditableProfileCard {...args} />
);

const user: Profile = {
  id: "1",
  username: "sarkis",
  avatar: "https://placehold.co/128x128",
  currency: Currency.RUB,
  country: Country.Russia,
  name: "Sarkis",
  lastname: "Shainyan",
  city: "Zhukovsky",
  age: 21,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "1",
};
ReadOnly.decorators = [
  storeDecorator({
    profile: {
      isLoading: false,
      data: user,
      form: user,
      readonly: true,
    },
  }),
];

export const Editable = Template.bind({});
Editable.args = {
  id: "1",
};
Editable.decorators = [
  storeDecorator({
    user: {
      authData: {
        id: "1",
      },
    },
    profile: {
      isLoading: false,
      data: user,
      form: user,
      readonly: false,
    },
  }),
];

export const Loading = Template.bind({});
Loading.decorators = [
  storeDecorator({
    profile: {
      isLoading: true,
      readonly: true,
    },
  }),
];

export const Error = Template.bind({});
Error.decorators = [
  storeDecorator({
    profile: {
      isLoading: false,
      error: "error",
    },
  }),
];
