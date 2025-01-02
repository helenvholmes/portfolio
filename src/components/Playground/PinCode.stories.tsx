import type { Meta, StoryObj } from "@storybook/react";

import PinCode from "./PinCode";

const meta = {
  component: PinCode,
  title: "Playground/PinCode",
} satisfies Meta<typeof PinCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    length: 4,
  },
};
