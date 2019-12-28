require("react-hot-loader/patch");
require("@babel/runtime/regenerator");
require("@babel/register");
require("core-js");
require("es6-promise/auto");
require("./main.tsx");

console.log('process.env: ', process.env);
