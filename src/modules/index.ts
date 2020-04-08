import { all } from "redux-saga/effects";
import {
    userActions, userApi, userReducer, userWatchers, userWorkers,
} from "./users";

export { pageReducer } from "./app";


function* rootSagas () {
    console.log('userWatchers', userWatchers);

    yield all([...userWatchers]);
}

export {
    userActions, userApi, userReducer, userWatchers, userWorkers,rootSagas
};
