import React from 'react';
import TaskList from "../components/TaskList";

const tasks = [
    {
        id: 1, title: 'Testing 1', description: 'write some tests',
        priority: 1, due_date: '2021-02-20', completed: false
    },
    {
        id: 2, title: 'Testing 2', description: 'write some tests',
        priority: 1, due_date: '2021-02-21', completed: false
    },
    {
        id: 3, title: 'Testing 3', description: 'write some tests',
        priority: 1, due_date: '2021-02-22', completed: false
    }
];

describe("TaskList component", () => {
    it("renders without crashing", () => {
        shallow(<TaskList tasks = {tasks}/>);
    });

    it("containes the list of tasks", () => {
        const wrapper = shallow(<TaskList tasks = {tasks}/>);
        const value = wrapper.find(".taskList");
        expect(value.length).toBe(1);
    });
});