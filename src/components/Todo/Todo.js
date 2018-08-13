import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction,ListItemAvatar, IconButton, Avatar} from '@material-ui/core';
import DeleteIcon  from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../../actions/todos-actions";
import red from '@material-ui/core/colors/red';
import SaveIcon from '@material-ui/icons/Save';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Todo.css';

const styles = {
    root: {
        color: '#000'
    },
};

const Todo = ({ dispatch, id, isCompleted, text}) => (

    <ListItem >

        <ListItemAvatar onClick={() => {
            console.log(id);
            dispatch(toggleTodo(id))}}>
            <SaveIcon   style={{color: '#28a745'}} />
        </ListItemAvatar>

        <ListItemText primary={text} variant={"title"} className={"primary secondary"}
                      secondary={`Completed : ${isCompleted}`}
                     classes={{
                         root : 'state-root'
                     }}
        />

        <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch(deleteTodo(id))}>
                <DeleteIcon style={{color: 'red'}} />
            </IconButton>
        </ListItemSecondaryAction>

    </ListItem>
);


export default connect()(Todo);