"use strict";

module.exports = api => {
    const {NODE_ENV} = process.env;
    api.cache(()=>NODE_ENV);
    api.env();

    if (NODE_ENV === "babel") {
        return {
            presets: [
                "@babel/preset-typescript"
            ],
            plugins: [
                ["@babel/plugin-syntax-dynamic-import"],
            ]
        }
    }

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
                ["@babel/plugin-syntax-dynamic-import"],
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
                        browsers: [
                            ">1%",
                            "last 4 versions",
                            "ie >= 11",
                            "edge >= 16",
                            "firefox >= 43",
                            "Firefox ESR",
                            "chrome >= 47",
                            "ChromeAndroid >= 69.0",
                            "safari >= 11"
                          ],

                    },
                    useBuiltIns: "entry",
                    corejs: 3,
                    modules: false
                }],
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
            plugins: [
                "@babel/plugin-transform-runtime",
                ["@babel/plugin-syntax-dynamic-import"],
                ["@babel/plugin-transform-async-to-generator"],
                ["@babel/plugin-proposal-object-rest-spread"],
                ["@babel/plugin-transform-object-super"],
                ["@babel/plugin-transform-function-name"],
                ["@babel/plugin-transform-block-scoping"]
            ]
        }
    }

}
