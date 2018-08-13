import { ADD_TODO, TOGGLE_TODO, DELETE_TODO} from "../actions/types";

const initialState = {
    todoItems : [

    ]
};

const todos = (state= initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            //items: action.payload
            return {
                todoItems : [
                    ...state.todoItems,
                    {
                        id: action.id,
                        text : action.text,
                        isCompleted : false
                    }
                ]

            };

        case TOGGLE_TODO:
            return {
                todoItems : state.todoItems.map( todo =>
                    (todo.id === action.id) ?
                        { ...todo, isCompleted : !todo.isCompleted }
                        : todo
                )

            };

        case DELETE_TODO:
            return {
                todoItems : state.todoItems.filter( todo =>
                    todo.id !== action.id
                )

            };

        default:
            return state;
    }
};

export default todos;