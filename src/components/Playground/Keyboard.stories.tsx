import type { Meta, StoryObj } from "@storybook/react";

import { Keyboard } from "./Keyboard";

const meta = {
  component: Keyboard,
  title: "Playground/Keyboard",
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    keys: [
      { keyCode: "65", note: "A", sound: "clap" },
      { keyCode: "83", note: "S", sound: "hihat" },
    ],
  },
};
