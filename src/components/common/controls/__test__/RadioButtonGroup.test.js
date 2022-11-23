import React from "react";
import { render } from "@testing-library/react";
import RadioButtonGroup from "../RadioButtonGroup"

describe("Renders RadioButtonGroup", () => {
    it("should render RadioButtonGroup correctly", () => {
        const component = render(<RadioButtonGroup amount="Test" />);
        expect(component).toMatchSnapshot();
    });
});
