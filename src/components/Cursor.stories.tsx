import type { Meta, StoryObj } from "@storybook/react";

import Clickable from "./Clickable";
import { Cursor } from "./Cursor";

const meta = {
  component: Cursor,
  decorators: [
    (Story) => (
      <div className="h-[50vh] w-full bg-background">
        <Story />
      </div>
    ),
  ],
  title: "Components/Cursor",
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cursorBackgroundColor: "var(--accent)",
  },
};

export const CursorOverClickable: Story = {
  render: () => (
    <div className="flex justify-center gap-4 p-4">
      <Clickable>hi</Clickable>
    </div>
  ),
};
