import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "../src/global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <Toaster richColors closeButton />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
