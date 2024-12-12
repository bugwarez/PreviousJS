"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var router_1 = require("./router");
var Home = function () { return react_1.default.createElement("h1", null, "Home"); };
var About = function () { return react_1.default.createElement("h1", null, "About"); };
var routes = [
    { path: "/", component: react_1.default.createElement(Home, null) },
    { path: "/about", component: react_1.default.createElement(About, null) },
];
var App = function () { return react_1.default.createElement(router_1.default, { routes: routes }); };
exports.App = App;
var rootElement = document.getElementById("root");
if (rootElement) {
    var root = client_1.default.createRoot(rootElement);
    root.render(react_1.default.createElement(App, null));
}
else {
    console.error("Root element not found!");
}
