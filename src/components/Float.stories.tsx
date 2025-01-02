import type { Meta, StoryObj } from "@storybook/react";

import Float from "./Float";

const meta = {
  component: Float,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  title: "Components/Float",
} satisfies Meta<typeof Float>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div className="h-48 w-48 bg-surface" />,
  },
};
