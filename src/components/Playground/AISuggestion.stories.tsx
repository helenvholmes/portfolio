import type { Meta, StoryObj } from "@storybook/react";

import { AISuggestion, AITagProps } from "./AISuggestions";

const meta = {
  component: AISuggestion,
  parameters: {
    layout: "centered",
  },
  title: "Playground/AISuggestion",
} satisfies Meta<typeof AISuggestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Match: Story = {
  args: {
    suggestions: [
      {
        message: "00/00/0000",
        state: "match",
      } as AITagProps,
      {
        message: "$00.00",
        state: "match",
      } as AITagProps,
      {
        message: "ACH",
        state: "match",
      } as AITagProps,
      {
        message: "Credit",
        state: "match",
      } as AITagProps,
      {
        message: "Participant Number 0438573835385",
        state: "no_match",
      } as AITagProps,
    ],
  },
};
