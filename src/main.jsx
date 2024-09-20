import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Routes } from "./routes/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <Routes />
    </PrimeReactProvider>
  </StrictMode>
);
