import React from 'react'
import About from '../components/About'

describe("About components", () => {
    it("renders without crashing", () => {
        shallow(<About />);
    });

    it("contains container element", () => {
        const wrapper = shallow(<About/>);
        const value = wrapper.find(".container");
        expect(value.length).toBe(1);
    });

    it("contains header element", () => {
        const wrapper = shallow(<About/>);
        const value = wrapper.find(".header");
        expect(value.length).toBe(1);
    });
});