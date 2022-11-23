import React from "react";
import { render } from "@testing-library/react";
import CustomDate from "../index"

describe("Renders CustomDate", () => {
    it("should render CustomDate correctly", () => {
        const component = render(<CustomDate
        />);
        expect(component).toMatchSnapshot();
    });
});
