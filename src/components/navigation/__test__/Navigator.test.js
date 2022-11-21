import React from "react";
import { render } from "@testing-library/react";
import Navigator from "../Navigator"
import { BrowserRouter as Router } from 'react-router-dom';


describe("Renders Navigator", () => {
    it("should render Navigator correctly", () => {
        const component = render(<Router><Navigator /></Router>);
        expect(component).toMatchSnapshot();
    });
});
