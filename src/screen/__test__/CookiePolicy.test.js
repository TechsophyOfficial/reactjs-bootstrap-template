import React from "react";
import { render } from "@testing-library/react";
import CookiePolicy from "../CookiePolicy"

describe("Renders CookiePolicy", () => {
    it("should render CookiePolicy correctly", () => {
        const component = render(<CookiePolicy />);
        expect(component).toMatchSnapshot();
    });
});
