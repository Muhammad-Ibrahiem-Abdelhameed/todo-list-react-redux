import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from '../store';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import NavbarBootstrap from './Navbar/Navbar';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className={"App"}>
                    <NavbarBootstrap/>
                    <div className="container">
                        <div className="col-md-6 offset-md-3 col-10 offset-1">
                            <AddTodo/>
                            <br/>
                            <TodoList/>
                        </div>

                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
