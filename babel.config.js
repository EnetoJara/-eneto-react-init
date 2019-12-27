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

    }

}
