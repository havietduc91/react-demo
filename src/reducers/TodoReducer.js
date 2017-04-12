import {
    ADD_TODO,
    REMOVE_TODO
} from "../action-creators/TodoActionCreator";

const todoInitState = {
    list: ['Todo 1']
};

export const Todo = (state = todoInitState, action) => {
    let newState = {};
    let newList = state.list;

    switch (action.type) {
        case ADD_TODO:
            newList = newList.concat([action.data]);

            newState = {
                ...state,
                list: newList
            };

            break;

        case REMOVE_TODO:
            newList.splice(action.data, 1);
            newList = newList.concat([]);

            newState = {
                ...state,
                list: newList
            };

            break;

        default:
            return state;

    }

    console.log(newState);

    return newState;
};