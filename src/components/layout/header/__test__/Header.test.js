import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../../../../keycloak";
import Header from "../index"

describe("Renders Header", () => {
    it("should render Header correctly", () => {
        const component = render(
            <ReactKeycloakProvider
            initOptions={{
                onLoad: "login-required",
                checkLoginIframe: false,
            }}
            authClient={keycloak}
        >
        <Router><Header /></Router></ReactKeycloakProvider>);
        expect(component).toMatchSnapshot();
    });
});
