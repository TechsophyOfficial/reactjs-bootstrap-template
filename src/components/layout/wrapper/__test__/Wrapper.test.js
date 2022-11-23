import React from "react";
import { render } from "@testing-library/react";
import Wrapper from "../index"
import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../../../../keycloak";
import { BrowserRouter as Router } from 'react-router-dom';


const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({ notification: "Test Notification" });

describe("Renders Wrapper", () => {
    it("should render Wrapper correctly", () => {
        const component = render(
            <ReactKeycloakProvider
                initOptions={{
                    onLoad: "login-required",
                    checkLoginIframe: false,
                }}
                authClient={keycloak}
            >
                <Provider store={store}>
                    <Router>
                        <Wrapper />
                    </Router>
                </Provider>
            </ReactKeycloakProvider>);
        expect(component).toMatchSnapshot();
    });
});
