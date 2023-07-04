const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() => console.log(`Database connect`))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
