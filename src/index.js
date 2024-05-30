import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
