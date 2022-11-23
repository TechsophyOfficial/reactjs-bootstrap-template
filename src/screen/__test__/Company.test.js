import React from "react";
import { render } from "@testing-library/react";
import Company from "../Company"

describe("Renders Company", () => {
    it("should render Company correctly", () => {
        const component = render(<Company />);
        expect(component).toMatchSnapshot();
    });
});
