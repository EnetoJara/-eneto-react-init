import { call, put } from "redux-saga/effects";
import { AppAction, LoginCredentials, RegisterCredentials, UserState } from "resume-app";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../../utils/constants";
import { loginFailed, loginSuccess, registerFailed, registerSuccess } from "./users-actions";
import { userApi } from "./users-api";

export function* loginWorker(action: AppAction<LOGIN_REQUEST, LoginCredentials>) {
    try {
        const { payload } = action;
        const user: UserState = yield call(userApi.loginUser, payload);
        yield put(loginSuccess(user));
    } catch (error) {
        yield put(loginFailed(error));
    }
}

export function* registerWorker(action: AppAction<REGISTER_REQUEST, RegisterCredentials>) {
    try {
        const { payload } = action;

        yield call(userApi.registerUser, payload);
        yield put(registerSuccess());
    } catch (error) {
        yield put(registerFailed(error));
    }
}
