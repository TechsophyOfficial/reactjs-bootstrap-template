import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "../index"

describe("Renders Footer", () => {
    it("should render Footer correctly", () => {
        const component = render(<Router><Footer /></Router>);
        expect(component).toMatchSnapshot();
    });
});
