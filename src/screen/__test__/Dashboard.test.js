import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "../Dashboard"

describe("Renders Dashboard", () => {
    it("should render Dashboard correctly", () => {
        const component = render(<Dashboard />);
        expect(component).toMatchSnapshot();
    });
});
