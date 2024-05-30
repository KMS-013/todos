const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const tasksRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const connect = require("./db/connect");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

app.get("*", (req, res) => {
  res.send("Path doen't exist!");
});

async function start() {
  try {
    await connect();
    console.log("Database connected successfully!");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000!");
    });
  } catch (error) {
    console.log("error", error);
    console.log("Failed to connect to the database!");
  }
}

start();