import type { Meta, StoryObj } from "@storybook/react";

import { ApprovalsTimeline } from "./ApprovalsTimeline";

const meta = {
  component: ApprovalsTimeline,
  title: "Playground/ApprovalsTimeline/ApprovalsTimeline",
} satisfies Meta<typeof ApprovalsTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    propName: "string",
  },
};
