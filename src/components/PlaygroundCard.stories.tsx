import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "./Playground/Toggle";
import PlaygroundCard from "./PlaygroundCard";

const meta = {
  component: PlaygroundCard,
  decorators: [
    (Story) => (
      <div className="bg-background p-6">
        <Story />
      </div>
    ),
  ],
  title: "Components/PlaygroundCard",
} satisfies Meta<typeof PlaygroundCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToggleWithState = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return <Toggle value={isEnabled} onChange={setIsEnabled} />;
};

export const Primary: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center">
      <PlaygroundCard label="On/Off Toggle" technology="Framer Motion">
        <ToggleWithState />
      </PlaygroundCard>
    </div>
  ),
};
