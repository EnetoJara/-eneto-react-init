import * as React from "react";
import * as Loadable from "react-loadable";

const Loading = () => <span>Loadong</span>;
export const Login = Loadable({
    loader: () => import("./login-container"),
    loading: Loading
});
