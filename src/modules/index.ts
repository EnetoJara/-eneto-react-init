import { all } from "redux-saga/effects";
import { userActions, userApi, userReducer, userWatchers, userWorkers } from "./users";
export { pageReducer } from "./app";
export { userActions, userApi, userReducer, userWatchers, userWorkers, rootSagas };

function* rootSagas() {
    yield all([...userWatchers]);
}
