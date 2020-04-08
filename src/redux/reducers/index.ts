import { combineReducers } from "redux";
import { pageReducer, userReducer } from "../../modules";

export const rootReducer = combineReducers({
    user: userReducer,
    app: pageReducer,
});
