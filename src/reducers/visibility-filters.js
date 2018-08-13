import { VisibilityFilters, SET_VISIBILE } from '../actions/filter-actions';

const visibiltyFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILE:
            return action.filter;
        default:
            return state;
    }
};

export default visibiltyFilter;
