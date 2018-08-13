import React, {Component} from 'react';
import {Grid, List} from '@material-ui/core';
import Todo from '../Todo/Todo';
import {connect} from "react-redux";
import {VisibilityFilters, setVisibilityFilters} from "../../actions/filter-actions";
import {toggleTodo, addTodo} from '../../actions/todos-actions';
import './TodoList.css';

const TodoList = ({todoItems, dispatch}) => (

    <div>
        <div >
            <button type="button" className="btn btn-light active col-4"
                    onClick={ () => dispatch(setVisibilityFilters(VisibilityFilters.SHOW_ALL))}>
                All</button>

            <button type="button" className="btn btn-success col-4"
                    onClick={ () => dispatch(setVisibilityFilters(VisibilityFilters.SHOW_COMPLETED))}>
                Completed</button>

            <button type="button" className="btn btn-warning col-4"
                    onClick={ () => dispatch(setVisibilityFilters(VisibilityFilters.SHOW_ACTIVE))}>
                Active</button>
        </div>
        <List>
            {console.log(todoItems)}
            {
                todoItems.map(todo =>
                    <Todo key={todo.id}
                          {...todo}
                    />
                )
            }
        </List>
    </div>

);

const getVisibleTodos = (todoItems, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todoItems;
        case VisibilityFilters.SHOW_COMPLETED:
            return todoItems.filter(t => t.isCompleted);
        case VisibilityFilters.SHOW_ACTIVE:
            return todoItems.filter(t => !t.isCompleted);

    }
};


const mapStateToProps = state => ({
    todoItems: getVisibleTodos(state.todos.todoItems, state.visibiltyFilter)
});


export default connect(
    mapStateToProps,
    null
)(TodoList)
