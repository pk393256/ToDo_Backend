export const TOGGLE_TASK = "TOGGLE_TASK";
export const TOGGLE_AUTH = 'TOGGLE_AUTH';

export function toggleToken(payload){
    return {
        type:TOGGLE_TASK,
        payload
    }
}

export function toggleAuth(){
    return {
        type:TOGGLE_AUTH
    }
}