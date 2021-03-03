import React from 'react'
import Loader from '../components/Loader'

describe("Loader components", () => {
    it("renders without crashing", () => {
        shallow(<Loader />);
    });

    it("contains spinner-border element", () => {
        const wrapper = shallow(<Loader />);
        const value = wrapper.find(".spinner-border");
        expect(value.length).toBe(1);
    });
});