import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContextProvider.tsx";
import StoreContextProvider from "./Context/StoreContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
