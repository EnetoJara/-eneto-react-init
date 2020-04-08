import * as React from "react";
import * as Loadable from "react-loadable";

export { PageComponent as Page } from "./page-container";

const Loading = (): React.ReactElement => <span>Loadong</span>;

export const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ "./login-container"),
    loading: Loading,
});

export const Register = Loadable({
    loader: () => import(/* webpackChunkName: "register" */ "./register-container"),
    loading: Loading,
});
