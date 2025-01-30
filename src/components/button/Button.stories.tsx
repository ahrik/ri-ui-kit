import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseButton } from './BaseButton';

export default {
  title: 'UI/Button',
  component: BaseButton,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof BaseButton>;

const Template: StoryFn<typeof BaseButton> = (args) => <BaseButton {...args} >Base Button</BaseButton>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
};