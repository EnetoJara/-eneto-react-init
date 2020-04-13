import { AppAction, ListState, Lists } from "resume-app";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, GET_LISTS_SUCCESS } from "../../utils/constants";

export const initListState =  Object.freeze<ListState>({
    lists: []
})

function clean (state: ListState): ListState {
    return {
        ...state,
        ...initListState,
    };
}

function setLists (state: ListState, payload: Lists[]): ListState {
    return {
        ...state,
        lists: payload
    }
}

export function listReducer (state: ListState = initListState, action: AppAction): ListState {
    switch (action.type) {
       case GET_LISTS_SUCCESS:
           return setLists(state, action.payload)
        default:
            return {
                ...state,
            };
    }
}
