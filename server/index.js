const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./util/database");

const app = express();

app.use(cors()); // allow cors
app.use(bodyParser.json()); // parse incoming json

const userRouter = require("./routes/user");
const imageRouter = require("./routes/images");

app.use("/user", userRouter);
app.use("/gallery", imageRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
