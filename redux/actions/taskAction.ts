import * as ActionTypes from '../../constants/types';
import Task from 'models/Task';

export const addTask = (payload: Task) => (dispatch: any) => {
    dispatch({
        type: ActionTypes.ADD_TASK,
        payload
    })
}

export const removeTask = (payload: Task) => (dispatch: any) => {
    dispatch({
        type: ActionTypes.REMOVE_TASK,
        payload
    })
}

export const updateTask = (task: Task, status: string) => (dispatch: any) => {
    dispatch({
        type: ActionTypes.UPDATE_TASK,
        payload: {
            task,
            status
        }
    })
}