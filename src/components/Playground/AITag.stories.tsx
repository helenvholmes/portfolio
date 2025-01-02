import type { Meta, StoryObj } from "@storybook/react";

import { AITag } from "./AISuggestions";

const meta = {
  component: AITag,
  parameters: {
    layout: "centered",
  },
  title: "Playground/AITag",
} satisfies Meta<typeof AITag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Match: Story = {
  args: {
    message: "00/00/0000",
    state: "match",
  },
};

export const PartialMatch: Story = {
  args: {
    message: "00/00/0000",
    state: "partial_match",
  },
};

export const NoMatch: Story = {
  args: {
    message: "00/00/0000",
    state: "no_match",
  },
};

export const TagWithLotsOfInnerText: Story = {
  args: {
    message: "reconciled items for example, or perhaps something else",
    state: "no_match",
  },
};
