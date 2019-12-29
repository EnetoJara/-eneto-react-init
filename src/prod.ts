require("@babel/runtime-corejs3/regenerator");
require("@babel/register");
require("core-js/web/index");
require("es6-promise/dist/es6-promise.auto");
require("./main.tsx");

console.log("process.env: ", process.env);
