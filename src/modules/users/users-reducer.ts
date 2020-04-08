import { AppAction, UserState } from "resume-app";
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../../utils/constants";

export const initUserState: UserState = Object.freeze<UserState>({
    id: -1,
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    email: "",
    token: "",
});

function clean (state: UserState): UserState {
    return {
        ...state,
        ...initUserState,
    };
}

export function userReducer (state: UserState = initUserState, action: AppAction): UserState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case REGISTER_SUCCESS:
            return clean(state);
        default:
            return {
                ...state,
            };
    }
}
