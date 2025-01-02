import type { Meta, StoryObj } from "@storybook/react";

import Item from "./Item";
import { ExampleTeam } from "./Team.stories";

const meta = {
  component: Item,
  decorators: [
    (Story) => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
  title: "Components/Item",
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Project: Story = {
  args: {
    description:
      "Built out the AI Mapping UI tool for Modern Treasury's reconciliation engine, which allowed users to visualize and connect data columns in their own software against MT's. Unveiled at Transfer 2024.",
    team: { ...ExampleTeam.args },
    title: {
      clickableProps: {
        children: "AI Mapping UI, Transfer 2024",
        destination: "external",
        href: "https://www.moderntreasury.com/resources/money-movement-goes-beyond-payments",
        openInNewTab: true,
      },
    },
    year: "2024",
  },
};

export const Experience: Story = {
  args: {
    description:
      "Maintained the design system, built app UI, and redesigned the marketing website for Modern Treasury, a company modernizing money movement.",
    title: {
      title: "Staff Design Engineer,",
      titleClickable: {
        children: "Modern Treasury",
        destination: "external",
        href: "https://www.moderntreasury.com",
        openInNewTab: true,
      },
    },
    year: "2022—2024",
  },
};
