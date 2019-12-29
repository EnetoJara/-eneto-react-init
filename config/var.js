"use strict";

const fs = require("fs");
const path = require("path");

const { NODE_ENV } = process.env;

require("dotenv-expand")(
    require("dotenv").config({
        path: '.env',
    })
);

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);

module.exports = function () {
    const ENETO = /^ENETO_/i;
    const ROUTE = /^ROUTE_/i;
    const raw = Object.keys(process.env)
        .filter(key => ENETO.test(key) || ROUTE.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key];
                return env;
            },
            {
                NODE_ENV,
                PUBLIC_URL: process.env.ENETO_PUBLIC_URL,
            }
        );
    const stringified = {
        "process.env": Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };

    console.log(stringified);
    return { raw, stringified };
}
