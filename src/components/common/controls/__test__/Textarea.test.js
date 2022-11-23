import React from "react";
import { render } from "@testing-library/react";
import Textarea from "../Textarea"

describe("Renders Textarea", () => {
    it("should render Textarea correctly", () => {
        const component = render(<Textarea
            label="Textarea"
            name="dataInput"
            rows={1}
            size="small"
            required={true}
            variant="standard"
            placeholder="Enter data"
            value="Test Value"
            defaultValue="I'm a textfield."
            type="text"
            key="Input_Sample"
            autoFocus />);
        expect(component).toMatchSnapshot();
    });
});
