import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "../src/global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzasgop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster richColors closeButton />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
