import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/thems/default";

export const decorators = [
  Story => (
        <ThemeProvider theme={defaultTheme}>
          <Story />
        </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
