const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./routes/api/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", usersRouter);

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() => console.log(`Database connect`))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
