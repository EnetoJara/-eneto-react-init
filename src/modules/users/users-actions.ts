import { AppAction, LoginCredentials, RegisterCredentials, UserState } from "resume-app";
import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../../utils/constants";

/**
 * Action creator to handle the login process of a user.
 *
 * @param {LoginCredentials} credentials value to be dispatched
 * @returns {AppAction<LOGIN_REQUEST,LoginCredentials>} action
 */
export function login(credentials: LoginCredentials): AppAction<LOGIN_REQUEST, LoginCredentials> {
    return {
        type: LOGIN_REQUEST,
        payload: credentials
    };
}

export type LoginRequest = typeof login;
/**
 * Action creator. triggered once the user has been login successfully.
 *
 * @param {UserState} user value to be dispatched
 * @returns {AppAction<LOGIN_SUCCESS,UserState>} action
 */
export function loginSuccess(user: UserState): AppAction<LOGIN_SUCCESS, UserState> {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}
export type LoginSuccess = typeof loginSuccess;
/**
 * Action creator. triggered when the user could not login.
 *
 * @param {Error} error value to be dispatched
 * @returns {AppAction<LOGIN_FAILED,Error>} action
 */
export function loginFailed(error: Error): AppAction<LOGIN_FAILED, Error> {
    return {
        type: LOGIN_FAILED,
        payload: error
    };
}
export type LoginFailed = typeof loginFailed;
/**
 * Action creator to handle the login process of a user.
 *
 * @param {RegisterCredentials} credentials value to be dispatched
 * @returns {AppAction<REGISTER_REQUEST,RegisterCredentials>} action
 */
export function register(credentials: RegisterCredentials): AppAction<REGISTER_REQUEST, RegisterCredentials> {
    return {
        type: REGISTER_REQUEST,
        payload: credentials
    };
}

export type RegisterRequest = typeof register;

/**
 * Action creator. triggered once the user has been registered successfully.
 *
 * @param {UserState} credentials value to be dispatched.
 * @returns {AppAction<REGISTER_SUCCESS,UserState>} action.
 */
export function registerSuccess(): AppAction<REGISTER_SUCCESS, undefined> {
    return {
        type: REGISTER_SUCCESS,
        payload: undefined
    };
}

export type RegisterSuccess = typeof registerSuccess;

/**
 * Action creator. triggered when the user could not register.
 *
 * @param {Error} error value to be dispatched
 * @returns {AppAction<REGISTER_FAILED,Error>} action
 */
export function registerFailed(error: Error): AppAction<REGISTER_FAILED, Error> {
    return {
        type: REGISTER_FAILED,
        payload: error
    };
}

export type RegisterFailed = typeof registerFailed;

export type UserActions =
    | typeof registerFailed
    | typeof registerSuccess
    | typeof register
    | typeof loginFailed
    | typeof loginSuccess
    | typeof login;
