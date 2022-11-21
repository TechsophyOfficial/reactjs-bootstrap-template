import React from "react";
import { render } from "@testing-library/react";
import Profile from "../Profile"

describe("Renders Profile", () => {
    it("should render Profile correctly", () => {
        const component = render(<Profile />);
        expect(component).toMatchSnapshot();
    });
});
