import { LOAD_TASKS, ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/actionTypes'

function tasksReducer(state = [], action)
{
    switch(action.type){
        case LOAD_TASKS:
            return action.tasks;
         
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    priority: action.priority,
                    due_date: action.due_date,
                    completed: action.completed,
                    user_id: action.user_id
                }
            ];
            
        case TOGGLE_TASK:
            return state.map(task => (task.id === action.index)
                ? {...task, title: action.title,
                    description: action.description,
                    priority: action.priority,
                    due_date: action.due_date,
                    completed: !task.completed,
                    user_id: action.user_id}
                : task
            );

        case DELETE_TASK:
            return state.filter(task => task.id !== action.index);

        default:
            return state;
    }
}

export default tasksReducer