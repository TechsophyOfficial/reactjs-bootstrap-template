import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxList from "../CheckboxList"

let checkboxListData = [
    {
        title: 'TEST TITLE 1',
        value: '1',
        // icon: oneIcon,
        // inActiveIcon: oneInActive
    },
    {
        title: 'TEST TITLE 2',
        value: '2',
        // icon: twoIcon,
        // inActiveIcon: twoInActive
    },
    {
        title: 'TEST TITLE 3',
        value: '3',
        // icon: threeIcon,
        // inActiveIcon: threeInActive
    },
]

// const [checkList, setCheckList] = useState([...checkboxListData]);

describe("Renders CheckboxList", () => {
    it("should render CheckboxList correctly", () => {
        const setCheckList = (list) => {
            checkboxListData = list
        }
        const component = render(<CheckboxList text="Small" size="small" list={checkboxListData} onChange={(e, list) => setCheckList(list)} />);
        expect(component).toMatchSnapshot();
    });
    it("should check onchange", () => {
        const { container, getByText } = render(<CheckboxList text="Small" size="small" list={checkboxListData} onChange={(e, list) => setCheckList(list)} />);
        const element = getByText("TEST TITLE 2")
        fireEvent.click(element)
    });
});
