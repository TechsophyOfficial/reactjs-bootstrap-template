import React from "react";
import { render } from "@testing-library/react";
import SelectBox from "../SelectBox"

describe("Renders SelectBox", () => {
    it("should render SelectBox correctly", () => {
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
        const component = render(<SelectBox
            label="Dropdown"
            options={selectData}
            variant="filled" />);
        expect(component).toMatchSnapshot();
    });
});
