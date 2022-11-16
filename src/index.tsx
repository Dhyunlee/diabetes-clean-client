import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "components/App";
import { Global } from "@emotion/react";
import { reset } from "styles/reset";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);
