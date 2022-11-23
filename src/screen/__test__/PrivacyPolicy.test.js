import React from "react";
import { render } from "@testing-library/react";
import PrivacyPolicy from "../PrivacyPolicy"

describe("Renders PrivacyPolicy", () => {
    it("should render PrivacyPolicy correctly", () => {
        const component = render(<PrivacyPolicy />);
        expect(component).toMatchSnapshot();
    });
});
