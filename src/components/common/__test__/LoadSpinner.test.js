import React from "react";
import { render } from "@testing-library/react";
import LoadSpinner from "../LoadSpinner"

describe("Renders LoadSpinner", () => {
    it("should render LoadSpinner correctly", () => {
        const component = render(<LoadSpinner />);
        expect(component).toMatchSnapshot();
    });
});
