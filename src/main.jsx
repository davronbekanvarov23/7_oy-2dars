import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster
      toastOptions={{
        position: "top-right",
        success: {
          duration: 1000,

          style: {
            background: "green",
            color: "white",
          },
        },
        error: {
          position: "top-center",
          duration: 2000,
          style: {
            background: "red",
            color: "white",
          },
        },
      }}
    />
    <App />
  </Provider>
);
