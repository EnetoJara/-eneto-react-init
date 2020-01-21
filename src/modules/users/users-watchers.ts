import { fork, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../../utils/constants";
import { loginWorker, registerWorker } from "./users-workers";

function* loginWatcher() {
    yield takeLatest(LOGIN_REQUEST, loginWorker);
}

function* registerWatcher() {
    yield takeLatest(REGISTER_REQUEST, registerWorker);
}

export const userWatchers = [fork(loginWatcher), fork(registerWatcher)];
