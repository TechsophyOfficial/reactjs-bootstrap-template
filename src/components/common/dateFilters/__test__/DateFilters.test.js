import React from "react";
import { render } from "@testing-library/react";
import DateFilters from "../index"

describe("Renders DateFilters", () => {
    it("should render DateFilters correctly", () => {
        const component = render(<DateFilters />);
        expect(component).toMatchSnapshot();
    });
});
