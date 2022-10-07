import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import "./components/style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
