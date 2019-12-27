import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { App } from "./components/app";
import './styles/index.scss';
import { unregister } from "./worker";



function init (C: any) {
    render(<AppContainer>
        <C />
    </AppContainer>
        , document.getElementById("enetito"));
}

init(App);

if (module.hot) {
    module.hot.accept("./components/app/app-component.tsx", () => {
        const { App } = require("./components/app/app-component.tsx");
        init(App);
    })
}

unregister();
