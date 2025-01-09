import type { Meta, StoryObj } from "@storybook/react";

import TiltCard from "./TiltCard";

const meta = {
  component: TiltCard,
  title: "Playground/TiltCard",
} satisfies Meta<typeof TiltCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    i: 4,
  },
};
