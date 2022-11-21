import React from "react";
import { render } from "@testing-library/react";
import TermsOfUse from "../TermsOfUse"

describe("Renders TermsOfUse", () => {
    it("should render TermsOfUse correctly", () => {
        const component = render(<TermsOfUse />);
        expect(component).toMatchSnapshot();
    });
});
