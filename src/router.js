"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Router = function (_a) {
    var routes = _a.routes;
    var _b = (0, react_1.useState)(window.location.pathname), currentPath = _b[0], setCurrentPath = _b[1];
    (0, react_1.useEffect)(function () {
        var onPopState = function () { return setCurrentPath(window.location.pathname); };
        window.addEventListener("popstate", onPopState);
        return function () { return window.removeEventListener("popstate", onPopState); };
    }, []);
    var navigate = function (path) {
        window.history.pushState({}, "", path);
        setCurrentPath(path);
    };
    var route = routes.find(function (r) { return r.path === currentPath; });
    return react_1.default.createElement(react_1.default.Fragment, null, route ? route.component : react_1.default.createElement("h1", null, "404 Not Found"));
};
exports.default = Router;
