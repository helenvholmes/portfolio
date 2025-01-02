import type { Meta, StoryObj } from "@storybook/react";

import Clickable from "./Clickable";

const meta = {
  component: Clickable,
  title: "Components/Clickable",
} satisfies Meta<typeof Clickable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InternalClickable: Story = {
  args: {
    children: "Internal Next Link",
    destination: "internal",
    href: "/",
  },
};

export const ExternalClickable: Story = {
  args: {
    children: "External <a>",
    destination: "external",
    href: "https://google.com",
  },
};

export const ButtonClickable: Story = {
  args: {
    children: "Button",
    destination: "button",
  },
};

export const ForwardsClickable: Story = {
  args: {
    children: "Forwards",
    destination: "button",
    direction: "forwards",
  },
};

export const BackwardsClickable: Story = {
  args: {
    children: "Backwards",
    destination: "button",
    direction: "backwards",
  },
};

export const IndexClickable: Story = {
  args: {
    children: "Index page",
    destination: "button",
    type: "index",
  },
};
