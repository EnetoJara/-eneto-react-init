"use strict";

const path = require("path");
const webpack = require("webpack");
const PnpWebpackPlugin = require("pnp-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const paths = require("./paths");
const modules = require("./modules");
const getClientEnvironment = require("./env");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");

const postcssNormalize = require("postcss-normalize");
const appPackageJson = require(paths.appPackageJson);
const shouldUseSourceMap = false;
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || "10000");
const env = getClientEnvironment("");

module.exports = {
    mode: "development",
    bail: false,
    devtool: "source-map",
    entry: paths.appIndexJs,
    output: {
        path: undefined,
        pathinfo: true,
        filename: "static/js/bundle.js",
        futureEmitAssets: true,
        chunkFilename: "static/js/[name].chunk.js",
        publicPath: paths.publicUrlOrPath,
        devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
        jsonpFunction: `webpackJsonp${appPackageJson.name}`,
        globalObject: "this"
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all",
            name: false
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime-${entrypoint.name}`
        }
    },
    resolve: {
        modules: ["node_modules", paths.appNodeModules].concat(modules.additionalModulePaths || []),
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "react-native": "react-native-web",
            ...(modules.webpackAliases || {})
        },
        plugins: [PnpWebpackPlugin, new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])]
    },
    resolveLoader: {
        plugins: [PnpWebpackPlugin.moduleLoader(module)]
    },
    module: {
        strictExportPresence: true,
        rules: [
            { parser: { requireEnsure: false } },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve("url-loader"),
                        options: {
                            limit: imageInlineSizeLimit,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    },
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        include: paths.appSrc,
                        loader: require.resolve("babel-loader"),
                        options: {
                            customize: require.resolve("babel-preset-react-app/webpack-overrides"),

                            plugins: [
                                [
                                    require.resolve("babel-plugin-named-asset-import"),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent: "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                                            }
                                        }
                                    }
                                ]
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false
                        }
                    },
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve("babel-loader"),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [[require.resolve("babel-preset-react-app/dependencies"), { helpers: true }]],
                            cacheDirectory: true,
                            cacheCompression: false,
                            sourceMaps: shouldUseSourceMap,
                            inputSourceMap: shouldUseSourceMap
                        }
                    },
                    {
                        test: /\.(scss)$/,
                        use: [
                            { loader: "style-loader" },
                            { loader: "css-loader" },
                            {
                                loader: "postcss-loader",
                                options: {
                                    ident: "postcss",
                                    plugins: () => [
                                        require("postcss-flexbugs-fixes"),
                                        require("postcss-preset-env")({
                                            autoprefixer: {
                                                flexbox: "no-2009"
                                            },
                                            stage: 3
                                        }),

                                        postcssNormalize()
                                    ],
                                    sourceMap: true
                                }
                            },
                            { loader: "sass-loader" }
                        ]
                    },
                    {
                        loader: require.resolve("file-loader"),
                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        options: {
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    inject: true,
                    template: paths.appHtml
                },
                undefined
            )
        ),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
        new ModuleNotFoundPlugin(paths.appPath),
        new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new ManifestPlugin({
            fileName: "asset-manifest.json",
            publicPath: paths.publicUrlOrPath,
            generate: (seed, files, entrypoints) => {
                const manifestFiles = files.reduce((manifest, file) => {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);
                const entrypointFiles = entrypoints.main.filter((fileName) => !fileName.endsWith(".map"));

                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles
                };
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ].filter(Boolean),
    node: {
        module: "empty",
        dgram: "empty",
        dns: "mock",
        fs: "empty",
        http2: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty"
    },
    performance: false
};
