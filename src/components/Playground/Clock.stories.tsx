import type { Meta, StoryObj } from "@storybook/react";

import Clock from "./Clock";

const meta = {
  component: Clock,
  title: "Playground/Clock",
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    showDigitalTime: true,
  },
};
