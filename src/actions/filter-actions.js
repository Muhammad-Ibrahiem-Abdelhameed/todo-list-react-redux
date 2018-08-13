export const SET_VISIBILE = 'SET_VISIBILE';

export const setVisibilityFilters = filter => ({
    type: SET_VISIBILE,
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};