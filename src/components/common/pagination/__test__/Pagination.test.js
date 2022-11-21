import React from "react";
import { render } from "@testing-library/react";
import Pagination from "../index"

describe("Renders Pagination", () => {
    it("should render Pagination correctly", () => {
        const component = render(<Pagination />);
        expect(component).toMatchSnapshot();
    });
});
