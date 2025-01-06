import type { Meta, StoryObj } from "@storybook/react";

import { ApprovalNeeded } from "./ApprovalsTimeline";

const meta = {
  component: ApprovalNeeded,
  title: "Playground/ApprovalsTimeline/ApprovalNeeded",
} satisfies Meta<typeof ApprovalNeeded>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    approvalGroups: [
      {
        id: "1",
        name: "Finance",
        path: "/finance",
      },
    ],
    numberOfApprovals: 2,
  },
};
