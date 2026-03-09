const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body.task;
  todos.push(todo);
  res.json({ message: "Todo added", todos });
});

module.exports = app;