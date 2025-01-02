import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta = {
  component: Logo,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center bg-background p-6">
        <Story />
      </div>
    ),
  ],
  title: "Components/Logo",
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "text-accent",
    height: 48,
    width: 48,
  },
};
