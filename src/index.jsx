import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/thems/default";
import { createRoot } from "react-dom/client";

import App from "/src/components/app/app";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
