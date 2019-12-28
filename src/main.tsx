import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { App } from "./components/app";
import './styles/index.scss';
import { unregister } from "./worker";



function init(C: any) {
    if (process.env.NODE_ENV === "development") {
        render(<AppContainer>
            <C />
        </AppContainer>
            , document.getElementById("enetito"));
    } else {
        render(
            <C />

            , document.getElementById("enetito"));
    }
}

init(App);

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./components/app", () => {
        init(App);
    });
}

unregister();
