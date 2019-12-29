import { all } from "redux-saga/effects";
import { userActions, userApi, userReducer, userWatchers, userWorkers } from "./users";

function* rootSagas () {
    yield all([...userWatchers]);
}

export { userActions, userApi, userReducer, userWatchers, userWorkers, rootSagas };
