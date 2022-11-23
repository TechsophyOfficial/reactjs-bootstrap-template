import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button"

describe("Renders Button", () => {
    it("should render Button correctly", () => {
        const component = render(<Button text="Small" size="small" />);
        expect(component).toMatchSnapshot();
    });
});
