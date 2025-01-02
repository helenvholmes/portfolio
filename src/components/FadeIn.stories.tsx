import type { Meta, StoryObj } from "@storybook/react";

import FadeIn from "./FadeIn";

const meta = {
  component: FadeIn,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  title: "Components/FadeIn",
} satisfies Meta<typeof FadeIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div className="h-48 w-48 bg-surface" />,
  },
};
