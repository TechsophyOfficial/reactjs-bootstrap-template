import React from "react";
import { render } from "@testing-library/react";
import Label from "../Label"

describe("Renders Label", () => {
    it("should render Label correctly", () => {
        const component = render(<Label title="Test Label" required={true} />);
        expect(component).toMatchSnapshot();
    });
});
