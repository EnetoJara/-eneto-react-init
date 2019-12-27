"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_hot_loader_1 = require("react-hot-loader");
const app_1 = require("./components/app");
const worker_1 = require("./worker");
function init(C) {
    react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(C, null)), document.getElementById("enetito"));
}
init(app_1.App);
if (module.hot) {
    module.hot.accept("./components/app/app-component.tsx", () => {
        const { App } = require("./components/app/app-component.tsx");
        init(App);
    });
}
worker_1.unregister();
//# sourceMappingURL=main.js.map