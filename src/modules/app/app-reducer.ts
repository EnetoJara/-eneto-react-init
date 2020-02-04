import { AppAction, PageState } from "resume-app";
import { APP_LOADING, TOGGLE_SIDE_NAV } from "../../utils/constants";

export const initPageState = {
    loading: false,
    showSideNav: false
};

function clean(state: PageState): PageState {
    return {
        ...state,
        ...initPageState
    };
}

export function pageReducer(state: PageState = initPageState, action: AppAction): PageState {
    switch (action.type) {
        case TOGGLE_SIDE_NAV:
            return {
                ...state,
                ...action.payload
            };
        case APP_LOADING:
            return clean(state);
        default:
            return {
                ...state
            };
    }
}
