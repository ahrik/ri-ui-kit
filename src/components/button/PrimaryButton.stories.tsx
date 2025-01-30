import { Meta, StoryFn } from '@storybook/react';
import { PrimaryButton } from './primary-button/PrimaryButton';

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof PrimaryButton>;

const Template: StoryFn<typeof PrimaryButton> = args => <PrimaryButton {...args}>Primary Button</PrimaryButton>;

export const Default = Template.bind({});
Default.args = {};
