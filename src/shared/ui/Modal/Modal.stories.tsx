import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet,\n'
      + '        consectetur adipisicing elit.\n'
      + '        Aliquid, culpa debitis exercitationem\n'
      + '        facere fuga illum ipsam itaque iusto magni molestias\n'
      + '        necessitatibus non officia perspiciatis quam quas qui,\n'
      + '        repudiandae voluptatem? Ipsa.',
  isOpen: true,
};
