import { EMPLOYEE_ACTIONS } from './actions';

const LOCAL_STORAGE_BUCKET = 'buckets'

let localState = [];

try {
    localState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_BUCKET))
} catch (error) {

}

const initialState = localState || {
    buckets: []
};

const TodoReducer = (state = initialState, action = {}) => {
    let changes = {};

    switch (action.type) {
        case EMPLOYEE_ACTIONS.CREATE_EMPLOYEE:
            changes = {}
            break;

        default:
            break;
    }

    if (Object.keys(changes).length > 0) {
        localStorage.setItem(LOCAL_STORAGE_BUCKET, JSON.stringify(changes || {}))
        return changes;
    }
    else {
        return state;
    }
};

export default TodoReducer;
