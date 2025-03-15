import type { Meta, StoryObj } from "@storybook/react";
import { ReloadButton } from './ReloadButton';
import '../../index.css'

const meta = {
  component: ReloadButton,
  title: "ReloadBtn",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    name: "Reload",
    isLoading: false,
    onPress: () => {},
  },
} satisfies Meta<typeof ReloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
		name: 'Reload',
		isLoading: false
  },
};

export const Active: Story = {
  args: {
    name: "Reload",
    isLoading: true,
  },
};
