const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const route = require("./src/routes");
const { errorConverter, errorHandler } = require("./src/app/middlewares/error");
const db = require("./src/configs/db");

const app = express();
db.connectDB();

const port = process.env.PORT || 4000;
global.__basedir = __dirname;
const corsOptions = {
  origin: "http://localhost:4000",
};

app.use(express.static("src/resources/static/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use("/api", route);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/resources/static/assets/index.html");
});

app.get("/upload", function (req, res) {
  res.sendFile(__dirname + "/src/resources/static/assets/upload.html");
});

app.get("*", function (req, res, next) {
  res.status(200).json({
    message: "welcome to my API",
  });
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
