import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Flex } from "./Flex";

export default {
  title: "shared/Flex",
  component: Flex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 4,
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 8,
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 16,
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 32,
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  direction: "column",
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 4,
  direction: "column",
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 8,
  direction: "column",
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 16,
  direction: "column",
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  children: (
    <>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </>
  ),
  gap: 32,
  direction: "column",
};
