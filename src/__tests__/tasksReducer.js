import tasksReducer from '../reducers/tasksReducer'
import * as types from '../actions/actionTypes'

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

const index = 3;
const id = 5;
const title = "Task 5";
const description = "task 5";
const priority = 1;
const due_date = "2021-02-20";
const completed = false;

describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(tasksReducer(undefined, {})).toEqual([])
    })

    it('should handle LOAD_TASKS', () => {
        expect(
            tasksReducer([], {
                type: types.LOAD_TASKS,
                tasks
            })
        ).toEqual(tasks)
    });

    it('should handle ADD_TASK', () => {
        expect(
            tasksReducer([], {
                type: types.ADD_TASK,
                id: id,
                title: title,
                description: description,
                priority: priority,
                due_date: due_date,
                completed: completed
            })
        ).toEqual(
            [{
                id: id,
                title: title,
                description: description,
                priority: priority,
                due_date: due_date,
                completed: completed
            }]
        )
    });

    it('should handle UPDATE_TASK', () => {
        expect(
            tasksReducer(tasks.map(task => (task.id === index)
            ? {...task, title: title,
                description: description,
                priority: priority,
                due_date: due_date,
                completed: !completed}
            : task
        ), {
            type: types.UPDATE_TASK
        })
        ).toEqual([{
            id: 1, title: 'Testing 1', description: 'write some tests',
            priority: 1, due_date: '2021-02-20', completed: false
        },
        {
            id: 2, title: 'Testing 2', description: 'write some tests',
            priority: 1, due_date: '2021-02-21', completed: false
        },
        {
            id: 3, title: title, description: description,
            priority: priority, due_date: due_date, completed: !completed
        }])
    });

    it('should handle DELETE_TASK', () => {
        expect(
            tasksReducer(tasks.filter(task => task.id !== index), {
                type: types.DELETE_TASK
            }
            )
        ).toEqual([
            {
                id: 1, title: 'Testing 1', description: 'write some tests',
                priority: 1, due_date: '2021-02-20', completed: false
            },
            {
                id: 2, title: 'Testing 2', description: 'write some tests',
                priority: 1, due_date: '2021-02-21', completed: false
            }]
        )
    });
})