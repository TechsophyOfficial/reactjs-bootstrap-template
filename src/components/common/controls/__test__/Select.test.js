import React from "react";
import { render } from "@testing-library/react";
import Select from "../Select"

describe("Renders Select", () => {
    it("should render Select correctly", () => {
        const selectData = [
            {
                title: 'One',
                value: '1'
            },
            {
                title: 'Two',
                value: '2'
            },
            {
                title: 'Three',
                value: '3'
            },
        ]
        const component = render(<Select
            label="Dropdown options to be select from"
            options={selectData}
            variant="filled" />);
        expect(component).toMatchSnapshot();
    });
});
