import React from 'react';
import TriggerButton from '../components/TriggerButton';

describe("Trigger components", () => {
    it("renders without crashing", () => {
        shallow(<TriggerButton />);
    });

    it("contains btn element", () => {
        const wrapper = shallow(<TriggerButton/>);
        const value = wrapper.find(".btn");
        expect(value.length).toBe(1);
    });
});