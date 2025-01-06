import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
};

export const decorators = [
  withThemeByClassName({
    defaultTheme: "light",
    themes: {
      dark: "dark",
      light: "light",
    },
  }),
];

export default preview;
