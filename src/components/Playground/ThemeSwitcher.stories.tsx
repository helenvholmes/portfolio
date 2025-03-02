import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "next-themes";

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  title: "Playground/ThemeSwitcher",
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    i: 4,
  },
};
