import { combineReducers } from 'redux'
import { Todo } from './TodoReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


const AppReducers = combineReducers({
    todo: Todo,
    router: routerReducer,
    form: formReducer
});

export default AppReducers;