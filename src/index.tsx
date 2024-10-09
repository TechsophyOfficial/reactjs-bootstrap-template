import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import KeycloakService from "./utils/keycloakService";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

const renderRoot = () => {
  root.render(<App />);
};

console.log("Keycloak Configuration: ", KeycloakService);

KeycloakService.initKeycloak(renderRoot);
