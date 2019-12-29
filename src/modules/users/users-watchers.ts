import { fork, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../../utils/constants";
import { loginWorker } from "./users-workers";

function* loginWatcher () {
    yield takeLatest(LOGIN_REQUEST, loginWorker);
}

export const userWatchers = [fork(loginWatcher)];
