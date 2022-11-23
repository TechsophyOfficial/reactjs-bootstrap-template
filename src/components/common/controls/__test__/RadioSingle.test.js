import React from "react";
import { render } from "@testing-library/react";
import RadioSingle from "../RadioSingle"

describe("Renders RadioSingle", () => {
    it("should render RadioSingle correctly", () => {
        const component = render(<RadioSingle label="Above 18" view="circle" checked />);
        expect(component).toMatchSnapshot();
    });
});
