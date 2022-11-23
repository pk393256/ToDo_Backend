import { TOGGLE_TASK, TOGGLE_AUTH } from './action';

let initialTask = {
    token: '',
    

}
export function tokenReducer(state = initialTask, action) {
    switch (action.type) {
        case TOGGLE_TASK:
            return { token:action.payload }
        default:
            return state;
    }
}

let initialAuth = {
    status: false
}

export function authReducer(state = initialAuth, action) {
    switch (action.type) {
        case TOGGLE_AUTH:
            return { status: !state.status };
        default:
            return state;
    }
}

