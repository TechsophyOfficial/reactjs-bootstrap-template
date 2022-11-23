import React from "react";
import { render } from "@testing-library/react";
import Settings from "../Settings"

describe("Renders Settings", () => {
    it("should render Settings correctly", () => {
        const component = render(<Settings />);
        expect(component).toMatchSnapshot();
    });
});
