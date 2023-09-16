import { StoryObj } from '@storybook/react';
import Layout from './layout';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Layout> = {
  title: 'layout/root',
  component: Layout,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
