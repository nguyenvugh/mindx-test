import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routers } from "./constants";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <RouterProvider router={routers} />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
