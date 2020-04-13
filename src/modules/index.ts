import { all } from "redux-saga/effects";
import {
    userActions, userApi, userReducer, userWatchers, userWorkers,
} from "./users";

import {listActions,listApi,listReducer, listsWatchers} from "./lists"

export { pageReducer } from "./app";

function* rootSagas () {
    const watchers= [...userWatchers, listsWatchers];
    console.log("watchers",watchers);

    yield all(watchers);
}

export {
    userActions, userApi, userReducer, userWatchers, userWorkers, rootSagas,
    listActions,listApi,listReducer, listsWatchers
};
