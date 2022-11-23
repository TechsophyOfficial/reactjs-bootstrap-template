import React from "react";
import { render } from "@testing-library/react";
import FileUpload from "../FileUpload"

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("Renders FileUpload", () => {
    const mockStore = configureStore();
    let store;
    it("should render FileUpload correctly", () => {
        store = mockStore({});
        const component = render(
            <Provider store={store}>
                <FileUpload
                    id="abc"
                    label={"Sample File"}
                    placeholder={"upload"}
                    required={true}
                />
            </Provider>);
        expect(component).toMatchSnapshot();
    });
});
