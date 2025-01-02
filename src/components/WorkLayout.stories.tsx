import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import WorkLayout from "./WorkLayout";

const meta = {
  component: WorkLayout,
  decorators: [
    (Story) => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
  title: "Layouts/WorkLayout",
} satisfies Meta<typeof WorkLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div>
        <p>
          Modern Treasury automatically reconciles 99.9% of payments for
          customers, but that last 0.1% can be a huge number of reconciliations
          for customers with thousands, even hundreds of thousands of
          transactions a day. For that last 0.1% we rolled out an mapping tool,
          where customers could upload their own data column mapping and use
          MT&apos;s AI engine to quickly reconcile those final transactions.
        </p>
        <p>
          My part included building the suggestions card and adding new custom
          display column into Modern Treasury&apos;s table library. The card
          itself was a fun exercise in getting looping animations and loading
          transitions down, especially with Tailwind in the mix. Check out the
          recreation in the playground.
        </p>
        <p>Built on a tight deadline and unveiled at Transfer 2024.</p>
      </div>
    ),
    hero: (
      <Image
        alt=""
        height={300}
        src="https://placehold.co/600x300"
        width={600}
      />
    ),
    sideBar: [
      {
        alt: "",
        height: 800,
        src: "https://placehold.co/600x800",
        width: 600,
      },
    ],
    subMenu: {
      children: "Work",
      destination: "internal",
      direction: "backwards",
      type: "index",
    },
    team: {
      members: [
        {
          name: "Mafaz Chaudhry",
          role: "Engineering Colleague",
        },
        {
          name: "Alden Spence",
          role: "Designer",
        },
      ],
      year: "2024",
    },
    title: {
      children: "AI Mapping UI, Transfer 2024",
      destination: "external",
      href: "https://www.moderntreasury.com/resources/money-movement-goes-beyond-payments",
    },
  },
};

export const MultipleSidebarImages: Story = {
  args: {
    ...Primary.args,
    sideBar: [
      {
        alt: "",
        height: 400,
        src: "https://placehold.co/600x400",
        width: 600,
      },
      {
        alt: "",
        height: 400,
        src: "https://placehold.co/600x400",
        width: 600,
      },
    ],
  },
};
