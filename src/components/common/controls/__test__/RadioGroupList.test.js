import React from "react";
import { render } from "@testing-library/react";
import RadioGroupList from "../RadioGroupList"

describe("Renders RadioGroupList", () => {
    it("should render RadioGroupList correctly", () => {
        const GENDER = [
            {
                key: "MALE",
                label: "Male",
                enabled: true,
                parentKey: null,
            },
            {
                key: "FEMALE",
                label: "Female",
                enabled: true,
                parentKey: null,
            },
        ];

        const component = render(<RadioGroupList
            required={true}
            label={"GENDER"}
            name="gender"
            list={GENDER}
            row={false} />);
        expect(component).toMatchSnapshot();
    });
});
