import React from "react";
import { render } from "@testing-library/react";
import Toggle from "../Toggle"

describe("Renders Toggle", () => {
    it("should render Toggle correctly", () => {
        const component = render(<Toggle
            checked={true}
            label="ON"
        />);
        expect(component).toMatchSnapshot();
    });
});
