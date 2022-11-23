import React from "react";
import { render } from "@testing-library/react";
import Checkbox from '../Checkbox'

describe("Renders Checkbox", () => {
    it("should render Checkbox correctly", () => {
        const component = render(<Checkbox label="Checkbox Two"
            value='Two' />);
        expect(component).toMatchSnapshot();
    });
});
