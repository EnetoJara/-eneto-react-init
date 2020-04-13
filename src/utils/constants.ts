import { AxiosRequestConfig } from "axios";
import * as qs from "qs";

export const { ROUTE_HOME } = process.env;
export const { ROUTE_LOGIN } = process.env;
export const { ROUTE_REGISTER } = process.env;

export const TOGGLE_SIDE_NAV = "app/toggle-side-nav";
export type TOGGLE_SIDE_NAV = typeof TOGGLE_SIDE_NAV;
export const APP_LOADING = "app/loading";
export type APP_LOADING = typeof APP_LOADING;
export const LOGIN_REQUEST = "users/login-request";
export type LOGIN_REQUEST = typeof LOGIN_REQUEST;
export const LOGIN_SUCCESS = "users/login-success";
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export const LOGIN_FAILED = "users/login-failed";
export type LOGIN_FAILED = typeof LOGIN_FAILED;

export const REGISTER_REQUEST = "users/register-request";
export type REGISTER_REQUEST = typeof REGISTER_REQUEST;
export const REGISTER_SUCCESS = "users/register-success";
export type REGISTER_SUCCESS = typeof REGISTER_SUCCESS;
export const REGISTER_FAILED = "users/register-failed";
export type REGISTER_FAILED = typeof REGISTER_FAILED;

export const GET_LISTS_REQUEST = "lists/request-all";
export type  GET_LISTS_REQUEST = typeof GET_LISTS_REQUEST;
export const GET_LISTS_SUCCESS = "lists/success-all";
export type  GET_LISTS_SUCCESS = typeof GET_LISTS_SUCCESS;
export const GET_LISTS_FAILED = "lists/failed-all";
export type  GET_LISTS_FAILED = typeof GET_LISTS_FAILED;

export const apiConfig: AxiosRequestConfig = {
    timeout: 15000,
    baseURL: process.env.API_BASE,
    headers: {
        common: {
            "Content-Type": "application/json",
           Accept: "application/json"
        },
    },
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
};

export const { API_LOGIN } = process.env;
export const { API_REGISTER } = process.env;
