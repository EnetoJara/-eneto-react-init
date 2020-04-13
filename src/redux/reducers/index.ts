import { combineReducers } from "redux";
import { pageReducer, userReducer, listReducer } from "../../modules";

export const rootReducer = combineReducers({
    user: userReducer,
    app: pageReducer,
    lists: listReducer
});
