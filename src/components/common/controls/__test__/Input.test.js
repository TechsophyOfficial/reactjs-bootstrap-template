import React from "react";
import { render } from "@testing-library/react";
import Input from "../Input"

describe("Renders Input", () => {
    it("should render Input(text) correctly", () => {
        const component = render(<Input
            type="text"
            placeholder="test"
            style={{ border: 'none', width: '-webkit-fill-available' }}
            className="customeInputUserProfile"
            value="Test Value"
            disableIcons={{test: true}}
            />);
        expect(component).toMatchSnapshot();
});

it("should render Input(email) correctly", () => {
    const component = render(<Input
        type="email"
        placeholder="test"
        style={{ border: 'none', width: '-webkit-fill-available' }}
        className="customeInputUserProfile"
        value="Test Value" 
        disableIcons={{left:true, right: true}}
        />);
    expect(component).toMatchSnapshot();
});

it("should render Input(date) correctly", () => {
    const component = render(<Input
        type="date"
        placeholder="test"
        style={{ border: 'none', width: '-webkit-fill-available' }}
        className="customeInputUserProfile"
        value="Test Value"
        minDate="01/01/2020"
        maxDate="01/01/2022"
    />);
    expect(component).toMatchSnapshot();
});


it("should render Input(tel) correctly", () => {
    const component = render(<Input
        type="tel"
        placeholder="test"
        style={{ border: 'none', width: '-webkit-fill-available' }}
        className="customeInputUserProfile"
        value="Test Value"
    />);
    expect(component).toMatchSnapshot();
});
});
