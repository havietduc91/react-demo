export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addToDo = (data) => {
    return {type: ADD_TODO, data}
}

export const removeToDo = (data) => {
    return {type: REMOVE_TODO, data}
}