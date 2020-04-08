import { fork, takeLatest, ForkEffect } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../../utils/constants";
import { loginWorker, registerWorker } from "./users-workers";

function* loginWatcher (): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(LOGIN_REQUEST, loginWorker);
}

function* registerWatcher (): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REGISTER_REQUEST, registerWorker);
}

export const userWatchers = [fork(loginWatcher), fork(registerWatcher)];
