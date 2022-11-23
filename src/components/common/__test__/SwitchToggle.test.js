import React from "react";
import { render } from "@testing-library/react";
import SwitchToggle from "../Switchtoggle"

describe("Renders SwitchToggle", () => {
    it("should render SwitchToggle correctly", () => {
        const component = render(<SwitchToggle />);
        expect(component).toMatchSnapshot();
    });
});
