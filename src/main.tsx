import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./components/app";
import "./styles/index.scss";
import { unregister } from "./worker";

function init (): void {
    if (process.env.NODE_ENV === "development") {
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById("enetito")
        );
    } else {
        render(<App />, document.getElementById("enetito"));
    }
}

init();

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./components/app", () => {
        init();
    });
}

unregister();
