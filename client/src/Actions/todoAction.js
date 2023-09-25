import { type } from "@testing-library/user-event/dist/type";
import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL, TODO_LIST, CHANGE_MODE, DELETE_TASK_FAIL, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, ADD_TASK_REQUEST, ADD_TASK_FAIL, ADD_TASK_SUCCESS, INVERSE_MARK_REQUEST, INVERSE_MARK_SUCCESS, INVERSE_MARK_FAIL, CLEAR_SUCCESS_MESSAGE } from "../Constants/todoConstant";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export const getTodo =
    () => async (dispatch) => {
        try {
            console.log("gggg")

            dispatch({ type: TODO_LIST_REQUEST });

            let url = `http://localhost:5000/tasks`;

            const data  = await axios.get(
                url
            );
            console.log("kk")
            console.log(data)
            dispatch({
                type: TODO_LIST_SUCCESS,
                payload: data.data.tasks,
            });

        } catch (error) {

            console.log("csdcjk")
            dispatch({
                type: TODO_LIST_FAIL,
                payload: error,
            });
        }
    };

export const getData = () => (dispatch) => {
    dispatch({ type: TODO_LIST })
}


export const changeMode = () => (dispatch) => {
    dispatch({ type: CHANGE_MODE })

}

export const deleteTodo = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_TASK_REQUEST });

        console.log(id)
        let url = 'http://localhost:5000/tasks';
        let data = {
            id: id
        };
        let config = {
            headers: {
                'Content-Type': 'application/json'
                // add more headers here if needed
            }
        };

        data = await axios.delete(url, { data }, config)

        console.log("came")
        console.log(data)

        dispatch({
            type: DELETE_TASK_SUCCESS,
            payload: data.data.tasks,
            message: data.data.message
        });

    } catch (error) {
        dispatch({
            type: DELETE_TASK_FAIL,
            payload: error,
        });
    }

}
export const addTodo = (inputs) => async (dispatch) => {
    try {

        dispatch({ type: ADD_TASK_REQUEST });

        console.log(inputs)
        let url = 'http://localhost:5000/tasks';
        let config = {
            headers: {
                'Content-Type': 'application/json'
                // add more headers here if needed
            }
        };

        const data = await axios.post(url, { inputs }, config)

        console.log("s")

        dispatch({
            type: ADD_TASK_SUCCESS,
            payload: data.data.tasks,
            message: data.data.message
        });

    } catch (error) {
        console.log("cjk")
        dispatch({
            type: ADD_TASK_FAIL,
            payload: error,
        });
    }
}
export const inverseMark = (id) => async (dispatch) => {
    try {

        dispatch({ type: INVERSE_MARK_REQUEST });

        let url = 'http://localhost:5000/tasks';
        let data = {
            id: id
        };
        let config = {
            headers: {
                'Content-Type': 'application/json'
                // add more headers here if needed
            }
        };

        data = await axios.put(url, data, config)

        dispatch({
            type: INVERSE_MARK_SUCCESS,
            payload: data.data.tasks,
            message: data.data.message
        });

    } catch (error) {
        dispatch({
            type: INVERSE_MARK_FAIL,

            payload: error,
        });
    }
}

export const clearMessage = () => (dispatch) => {
    dispatch({
        type: CLEAR_SUCCESS_MESSAGE
    });

}

// export const onSearch=(str)=>(dispatch)=>{
//     dispatch({type:})
// }