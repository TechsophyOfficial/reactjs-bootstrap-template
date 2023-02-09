import React from "react";
import { render } from "@testing-library/react";
import PreLoader from "../index"

describe("Renders PreLoader", () => {
    it("should render PreLoader correctly", () => {
        const component = render(<PreLoader />);
        expect(component).toMatchSnapshot();
    });
});
