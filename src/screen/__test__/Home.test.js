import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home"
import { BrowserRouter as Router } from 'react-router-dom';

describe("Renders Home", () => {
    it("should render Home correctly", () => {
        const component = render(<Router><Home /></Router>);
        expect(component).toMatchSnapshot();
    });
});
