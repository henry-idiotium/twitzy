import { StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'component/sidebar',
  component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
