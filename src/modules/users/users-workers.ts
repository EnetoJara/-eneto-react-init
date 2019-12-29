import { call, put } from "redux-saga/effects";
import { AppAction, LoginCredentials, UserState } from "resume-app";
import { LOGIN_REQUEST } from "../../utils/constants";
import { loginFailed, loginSuccess } from "./users-actions";
import { userApi } from "./users-api";

export function* loginWorker (action: AppAction<LOGIN_REQUEST, LoginCredentials>) {
    try {
        const { payload } = action;
        const user: UserState = yield call(userApi.loginUser, payload);
        yield put(loginSuccess(user));
    } catch (error) {
        yield put(loginFailed(error));
    }
}
