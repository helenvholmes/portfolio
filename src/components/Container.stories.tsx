import type { Meta, StoryObj } from "@storybook/react";

import Container from "./Container";

const meta = {
  component: Container,
  decorators: [
    (Story) => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
  title: "Components/Container",
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div className="h-96 w-full bg-surface" />,
  },
};

export const WithSidebar: Story = {
  args: {
    children: <div className="h-96 w-full bg-surface" />,
    subPageSideBar: true,
  },
};
