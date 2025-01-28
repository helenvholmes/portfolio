import type { Meta, StoryObj } from "@storybook/react";

import Scene from "./Scene";

const meta = {
  component: Scene,
  title: "Playground/Scene",
} satisfies Meta<typeof Scene>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    i: 4,
  },
};
