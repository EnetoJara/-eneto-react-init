import { GET_LISTS_REQUEST, GET_LISTS_SUCCESS, GET_LISTS_FAILED } from '../../utils/constants';
import { AppAction, Lists } from 'resume-app';

export function getAllListsRequest (): AppAction<GET_LISTS_REQUEST, null> {
    return {
        type: GET_LISTS_REQUEST,
        payload: null
    }
}

export type GetAllListsRequest = typeof getAllListsRequest;
export function getAllListsSuccess (lists: Lists[]): AppAction<GET_LISTS_SUCCESS, Lists[]> {
    return {
        type: GET_LISTS_SUCCESS,
        payload: lists
    }
}
export function getAllListsFailed (error: Error): AppAction<GET_LISTS_FAILED, Error> {
    return {
        type: GET_LISTS_FAILED,
        payload: error
    }
}
