import React from "react";
import { render } from "@testing-library/react";
import AccordionWrapper from '../AccordionWrapper'

describe("Renders AccordionWrapper", () => {
    it("should render AccordionWrapper correctly", () => {
        const component = render(<AccordionWrapper />);
        expect(component).toMatchSnapshot();
    });
});
