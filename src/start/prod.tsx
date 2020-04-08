import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppState } from "resume-app";
import { App } from "../components/app";
import { rootSagas } from "../modules";
import { initPageState } from "../modules/app/app-reducer";
import { initUserState } from "../modules/users/users-reducer";
import { configureStore } from "../redux/store/prod";
import "../styles/index.scss";
import { unregister } from "../worker";

const initState: AppState = {
    user: initUserState,
    app: initPageState,
};
const store = configureStore(initState);
store.runSaga(rootSagas);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("enetito"),
);

unregister();
