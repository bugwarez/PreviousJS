"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var react_1 = require("react");
var server_1 = require("react-dom/server");
var index_1 = require("./src/index");
var app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.get("*", function (req, res) {
    var appHtml = server_1.default.renderToString(react_1.default.createElement(index_1.App, null));
    res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>React Framework</title>\n      </head>\n      <body>\n        <div id=\"root\">".concat(appHtml, "</div>\n        <script src=\"/dist/bundle.js\"></script>\n      </body>\n    </html>\n  "));
});
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
