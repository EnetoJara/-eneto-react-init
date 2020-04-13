import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { App } from "../components/app";
import { rootSagas } from "../modules";
import { store } from "../redux/store/dev";
import "../styles/index.scss";
import { unregister } from "../worker";

store.runSaga(rootSagas);
store.subscribe(() => localStorage.setItem("initApp", JSON.stringify(store.getState())));
function init(Component: any): void {
    render(
        <AppContainer>
            <Provider store={store}><Component/></Provider>
        </AppContainer>,
        document.getElementById("enetito")
    );
}

unregister();
init(App);

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("../components/app", () => {
        const { App } = require("../components/app/app-component");
        init(App);
    });
}
