import { combineReducers } from 'redux';
import todos from './todos';
import visibiltyFilter from './visibility-filters';

export default combineReducers({
    todos,
    visibiltyFilter
})