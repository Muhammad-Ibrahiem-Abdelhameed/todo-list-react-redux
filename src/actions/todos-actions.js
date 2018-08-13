import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './types';

let todoId = 0;

export const addTodo = text => ({
    type : ADD_TODO,
    id : ++todoId,
    text
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
});

