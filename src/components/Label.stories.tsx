import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";

const meta = {
  component: Label,
  title: "Components/Label",
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "string",
  },
};
