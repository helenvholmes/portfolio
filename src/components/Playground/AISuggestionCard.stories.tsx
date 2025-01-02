import type { Meta, StoryObj } from "@storybook/react";

import { AISuggestionsCard } from "./AISuggestions";

const meta = {
  component: AISuggestionsCard,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="w-2/3">
          <Story />
        </div>
      </div>
    ),
  ],
  title: "Playground/AISuggestionCard",
} satisfies Meta<typeof AISuggestionsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Match: Story = {
  args: {
    loading: false,
    suggestionGroups: [
      {
        suggestions: [
          {
            message: "00/00/00",
            state: "match",
          },
          {
            message: "€50.00-€100.00",
            state: "match",
          },
          {
            message: "Credit",
            state: "partial_match",
          },
          {
            message: "Other but make it long to demonstrate truncation",
            state: "partial_match",
          },
          {
            message: "EUR",
            state: "match",
          },
          {
            message: "00/00/00",
            state: "match",
          },
          {
            message: "5000",
            state: "match",
          },
          {
            message: "€50.00-€100.00",
            state: "match",
          },
          {
            message: "Credit",
            state: "partial_match",
          },
          {
            message: "Other but make it long to demonstrate truncation",
            state: "partial_match",
          },
          {
            message: "EUR",
            state: "no_match",
          },
          {
            message: "10000",
            state: "no_match",
          },
          {
            message: "5000",
            state: "no_match",
          },
        ],
      },
      {
        suggestions: [
          {
            message: "00/00/00",
            state: "match",
          },
          {
            message: "€100.00",
            state: "partial_match",
          },
          {
            message: "Credit",
            state: "match",
          },
          {
            message: "EUR",
            state: "match",
          },
          {
            message: "Other but make it long to demonstrate truncation",
            state: "partial_match",
          },
          {
            message: "5000",
            state: "no_match",
          },
          {
            message: "00/00/00",
            state: "match",
          },
          {
            message: "5000",
            state: "match",
          },
          {
            message: "€50.00-€100.00",
            state: "match",
          },
          {
            message: "Credit",
            state: "partial_match",
          },
          {
            message: "Other but make it long to demonstrate truncation",
            state: "partial_match",
          },
          {
            message: "EUR",
            state: "no_match",
          },
          {
            message: "10000",
            state: "no_match",
          },
          {
            message: "5000",
            state: "no_match",
          },
        ],
      },
    ],
    title: "Suggested Expected Payments",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
