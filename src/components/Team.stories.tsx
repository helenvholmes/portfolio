import type { Meta, StoryObj } from "@storybook/react";

import Team from "./Team";

const meta = {
  component: Team,
  title: "Components/Team",
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleTeam: Story = {
  args: {
    members: [
      {
        name: "Kermit the Frog",
        role: "Executive Producer",
      },
      {
        name: "Miss Piggy",
        role: "Host of Up Late With Miss Piggy",
      },
    ],

    year: "2024",
  },
};
