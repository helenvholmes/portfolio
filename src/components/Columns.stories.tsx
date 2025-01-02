import type { Meta, StoryObj } from "@storybook/react";

import Columns from "./Columns";
import Item from "./Item";
import { Experience, Project } from "./Item.stories";

const meta = {
  component: Columns,
  decorators: [
    (Story) => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
  title: "Components/Columns",
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneColumn: Story = {
  args: {
    firstColumn: <Item {...Project.args} />,
    label: "One Column",
    numberOfColumns: 1,
  },
};

export const TwoColumns: Story = {
  args: {
    firstColumn: (
      <>
        <Item {...Experience.args} />
        <Item {...Experience.args} />
        <Item {...Experience.args} />
      </>
    ),
    label: "Two Columns",
    numberOfColumns: 2,
    secondColumn: (
      <>
        <Item {...Experience.args} />
        <Item {...Experience.args} />
        <Item {...Experience.args} />
      </>
    ),
  },
};
