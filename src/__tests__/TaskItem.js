import React from 'react';
import TaskItem from "../components/TaskItem";

const task =
{
    id: 1, title: 'Testing 1', description: 'write some tests',
    priority: 1, due_date: '2021-02-20', completed: false
};

const updateTask = jest.fn();

const deleteTask = jest.fn();

describe("TaskItem components", () => {
    it("renders without crashing", () => {
        shallow(<TaskItem task={task} key={task.id} id={task.id}
            updateTask={updateTask}
            deleteTask={deleteTask} />);
    });

    it("contains li element", () => {
        const wrapper = shallow(<TaskItem task={task} key={task.id} id={task.id}
            updateTask={updateTask}
            deleteTask={deleteTask} />);
        const value = wrapper.find(".task");
        expect(value.length).toBe(1);
    });

    it("contains input element", () => {
        const wrapper = shallow(<TaskItem task={task} key={task.id} id={task.id}
            updateTask={updateTask}
            deleteTask={deleteTask} />);
        const value = wrapper.find(".taskCheckbox");
        expect(value.length).toBe(1);
    });

    it("contains ModalContainer element", () => {
        const wrapper = shallow(<TaskItem task={task} key={task.id} id={task.id}
            updateTask={updateTask}
            deleteTask={deleteTask} />);
        const value = wrapper.find(".taskLabel");
        expect(value.length).toBe(1);
    });

    it("contains span element", () => {
        const wrapper = shallow(<TaskItem task={task} key={task.id} id={task.id}
            updateTask={updateTask}
            deleteTask={deleteTask} />);
        const value = wrapper.find(".deleteTaskBtn");
        expect(value.length).toBe(1);
    });
});