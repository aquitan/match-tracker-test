import type { Meta, StoryObj } from "@storybook/react";
import '../../index.css'
import { MatchStatus } from './MatchStatus';

const meta = {
  component: MatchStatus,
  title: "MatchStatus",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    type: "Ongoing",
  },
} satisfies Meta<typeof MatchStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ongoing: Story = {
  args: {
    type: "Ongoing",
  },
};

export const Finished: Story = {
  args: {
    type: "Finished",
  },
};

export const Scheduled: Story = {
  args: {
    type: "Scheduled",
  },
};
