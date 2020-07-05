import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RickMortyProvider } from "./context";

ReactDOM.render(
  <RickMortyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RickMortyProvider>,
  document.getElementById("root")
);
