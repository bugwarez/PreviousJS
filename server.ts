import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./src/index.js";

const app = express();

app.get("*", (req: express.Request, res: express.Response, next) => {
  if (req.url === "/dist/bundle.js" || req.url === "/favicon.ico") {
    return next();
  }

  const currentPath = req.url === "/" ? "/" : req.url;
  console.log("Current Path from Server:", currentPath);

  const appHtml = ReactDOMServer.renderToString(
    React.createElement(App, { currentPath })
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Framework</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
