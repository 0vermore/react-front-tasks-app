import { loadTasks, addTask, updateTask, deleteTask, authenticated, unauthenticated } from '../actions/actionCreators'
import * as types from '../actions/actionTypes';

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

const index = 4
const id = 4;
const title = 'Testing 4';
const description = 'write some tests';
const priority = 1;
const due_date = '2021-02-22';
const completed = false;

describe('Actions', () => {
    it('should create an action to load tasks', () => {
        const expectedAction = {
            type: types.LOAD_TASKS,
            tasks
        }
        expect(loadTasks(tasks)).toEqual(expectedAction)
    })

    it('should create an action to add a task', () => {
        const expectedAction = {
            type: types.ADD_TASK,
            id, title, description, priority, due_date, completed
        }
        expect(addTask(id, title, description,
            priority, due_date, completed)).toEqual(expectedAction)
    })

    it('should create an action to update a task', () => {
        const expectedAction = {
            type: types.UPDATE_TASK,
            index, title, description, priority, due_date, completed
        }
        expect(updateTask(index, title, description,
            priority, due_date, completed)).toEqual(expectedAction)
    })

    it('should create an action to delete a task', () => {
        const expectedAction = {
            type: types.DELETE_TASK,
            index
        }
        expect(deleteTask(index)).toEqual(expectedAction)
    })

    it('should create an action to authenticate user', () => {
        const expectedAction = {
            type: types.AUTHENTICATED
        }
        expect(authenticated()).toEqual(expectedAction)
    })

    it('should create an action to unauthenticate user', () => {
        const error = 'Some error';
        const expectedAction = {
            type: types.UnAUTHENTICATED,
            error
        }
        expect(unauthenticated(error)).toEqual(expectedAction)
    })
})