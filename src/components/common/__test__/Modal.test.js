import React from "react";
import { render } from "@testing-library/react";
import Modal from "../Modal"

describe("Renders Modal", () => {
    it("should render Modal correctly", () => {
        const component = render(<Modal />);
        expect(component).toMatchSnapshot();
    });
});
