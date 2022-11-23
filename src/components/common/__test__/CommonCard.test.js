import React from "react";
import { render } from "@testing-library/react";
import CommonCard from "../CommonCard"

describe("Renders CommonCard", () => {
    it("should render CommonCard correctly", () => {
        const component = render(<CommonCard />);
        expect(component).toMatchSnapshot();
    });
});
