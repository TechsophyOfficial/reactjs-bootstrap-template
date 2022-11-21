import React from "react";
import { render } from "@testing-library/react";
import DatePickerCust from "../index"

describe("Renders DatePickerCust", () => {
    it("should render DatePickerCust correctly", () => {
        const component = render(<DatePickerCust />);
        expect(component).toMatchSnapshot();
    });
});
