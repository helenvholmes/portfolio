import type { Meta, StoryObj } from "@storybook/react";

import { ApprovalNeeded } from "./ApprovalsTimeline";

const meta = {
  component: ApprovalNeeded,
  title: "Playground/ApprovalsTimeline/ApprovalNeeded",
} satisfies Meta<typeof ApprovalNeeded>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    approvalGroups: [
      {
        id: "1",
        name: "Finance",
        path: "/finance",
      },
      {
        id: "2",
        name: "Operations",
        path: "/operations",
      },
    ],
    numberOfApprovals: 2,
  },
};

export const SingleApprovalGroup: Story = {
  args: {
    approvalGroups: [
      {
        id: "1",
        name: "Finance",
        path: "/finance",
      },
    ],
  },
};

export const MultipleApprovalGroups: Story = {
  args: {
    approvalGroups: [
      {
        id: "1",
        name: "Finance",
        path: "/finance",
      },
      {
        id: "2",
        name: "Operations",
        path: "/operations",
      },
      {
        id: "3",
        name: "HR",
        path: "/hr",
      },
    ],
  },
};

export const CurrentUserCanReview: Story = {
  args: {
    approvalGroups: [
      {
        id: "1",
        name: "Finance",
        path: "/finance",
      },
    ],
  },
};
