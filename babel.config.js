"use strict";

module.exports = api => {
    const {NODE_ENV} = process.env;
    api.cache(()=>NODE_ENV);
    api.env();

    if (NODE_ENV === 'development') {
        return {
            presets: [
                ["@babel/preset-env", {
                    targets: {
                        node: "current",
                        esmodules: true
                    },
                    useBuiltIns: "entry",
                    corejs: 3,
                    modules: false
                }],
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
            plugins: [
                ["@babel/plugin-transform-runtime", {corejs: {version: 3, proposals: true}, useESModules: true}],
                "react-hot-loader/babel"
            ]
        }
    }

    if (NODE_ENV === 'test') {

    }

    if (NODE_ENV === 'production') {
        return {
            presets: [
                ["@babel/preset-env", {
                    targets: {
                        node: "current",
                        esmodules: false
                    },
                    useBuiltIns: "entry",
                    corejs: 3,
                    modules: "amd"
                }],
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
            plugins: [
                ["@babel/plugin-transform-react-constant-elements"],
                ["@babel/plugin-transform-react-inline-elements"],
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-modules-amd",
                ["@babel/plugin-transform-async-to-generator"],
                ["@babel/plugin-proposal-object-rest-spread"],
                ["@babel/plugin-transform-object-super"],
                ["@babel/plugin-transform-function-name"],
                ["@babel/plugin-transform-block-scoping"]
            ]
        }
    }

}
