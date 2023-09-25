import { todoReducer } from "./Reducer/todoReducer";
import { createStore,applyMiddleware,combineReducers } from 'redux';

import thunk from 'redux-thunk'
const Initialstate={loading: false,todo_data: [],error: "",isDarkMode:false,
messageSuccess:"payload.messageSuccess"}

// const logger = require('redux-logger').createLogger()

// let initialState = {
//     todo_data: []
// };
const reducer = combineReducers({
    list: todoReducer,
    })

    const store = createStore(
        reducer,Initialstate,applyMiddleware(thunk)
        
    );
export default store