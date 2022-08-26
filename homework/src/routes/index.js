const express = require("express");
const fileRouter = require("./file.route");
const authRouter = require("./auth.route");

const apiRoute = express();

apiRoute.use("/file", fileRouter);
apiRoute.use("/auth", authRouter);

module.exports = apiRoute;
