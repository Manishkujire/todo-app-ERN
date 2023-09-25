import { TODO_LIST_FAIL, TODO_LIST_REQUEST, TODO_LIST_SUCCESS, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAIL, UPDATE_TASK_FAIL, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS, INVERSE_MARK_REQUEST, INVERSE_MARK_SUCCESS, INVERSE_MARK_FAIL, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAIL,CLEAR_SUCCESS_MESSAGE } from "../Constants/todoConstant";
export const todoReducer = (state = [], { type, payload,message }) => {

    switch (type) {
        case TODO_LIST_REQUEST:
            // console.log(state)
            return {
                loading: true,
                tasks: [],
            };
        case TODO_LIST_SUCCESS:


            return {
                ...state,
                loading: false,
                tasks: payload,
            };
        case TODO_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case DELETE_TASK_REQUEST:
            // console.log(state.tasks.splice(state.tasks.findIndex(({id}) => id == payload), 1))

            return {
                ...state,
                loading: true,
            };
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: payload,
                messageSuccess:message
            };
        case DELETE_TASK_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case INVERSE_MARK_REQUEST:
            // console.log(state.tasks.splice(state.tasks.findIndex(({id}) => id == payload), 1))

            return {
                ...state,
                loading: true,
            };
        case INVERSE_MARK_SUCCESS:
           console.log("mm"+message)
            return {
                ...state,
                loading: false,
                tasks: payload,
                messageSuccess:message 
            };
        case INVERSE_MARK_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case ADD_TASK_REQUEST:
            // console.log(state.tasks.splice(state.tasks.findIndex(({id}) => id == payload), 1))

            return {
                ...state,
                loading: true,
            };
        case ADD_TASK_SUCCESS:
            console.log({
                loading: false,
                tasks: payload,
                messageSuccess:message 
            })
            return {
                ...state,
                loading: false,
                tasks: payload,
                messageSuccess:message 
            };
        case ADD_TASK_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case CLEAR_SUCCESS_MESSAGE:
            return {
                ...state,
                messageSuccess:"",
                error:""
            };
        default:
            return state

    }
}


