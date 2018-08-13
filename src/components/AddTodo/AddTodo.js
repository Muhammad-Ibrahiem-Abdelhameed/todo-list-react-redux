import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/todos-actions'
import { Button, Icon, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './AddTodo.css';

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div className={"div-add"}>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <div className="input-group border border-primary">
                    <input type="text" className="form-control" placeholder="Add Todo"
                           ref={node => input = node}/>
                        <div className="input-group-append">
                            <Button variant="contained" color="primary" className={"btn btn-success"}
                                    type={'submit'} >
                                <AddIcon  />
                                &nbsp;Save
                            </Button>
                        </div>
                </div>
            </form>
        </div>
    )
};

export default connect()(AddTodo)