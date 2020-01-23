import * as React from "react";
import * as Loadable from "react-loadable";
export { PageComponent as Page } from "./page-container";

const Loading = () => <span>Loadong</span>;

export const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ "./login-container"),
    loading: Loading
});
