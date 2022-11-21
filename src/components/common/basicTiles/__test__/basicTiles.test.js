import React from "react";
import { render } from "@testing-library/react";
import BasicTiles from "../index"

describe("Renders BasicTiles", () => {
    it("should render BasicTiles correctly", () => {
        const tileData = { value: 10, title: "Tile Example" };
        const component = render(<BasicTiles data={tileData} />);
        expect(component).toMatchSnapshot();
    });
});
