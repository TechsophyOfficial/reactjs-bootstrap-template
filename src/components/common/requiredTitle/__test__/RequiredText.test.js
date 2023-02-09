import React from "react";
import { render } from "@testing-library/react";
import RequiredText from "../index"

describe("Renders RequiredText", () => {
    it("should render RequiredText correctly", () => {
        const component = render(<RequiredText />);
        expect(component).toMatchSnapshot();
    });
});
