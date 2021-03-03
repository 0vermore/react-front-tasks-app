import React from 'react'
import ModalContainer from '../containers/ModalContainer'

const task =
{
    id: 1, title: 'Testing 1', description: 'write some tests',
    priority: 1, due_date: '2021-02-20', completed: false
};

describe("ModalContainer components", () => {
    it("renders without crashing", () => {
        shallow(<ModalContainer task={task} />);
    });

    it("contains triggerButton element", () => {
        const wrapper = shallow(<ModalContainer task={task}/>);
        const value = wrapper.find(".triggerButton");
        expect(value.length).toBe(1);
    });
});