"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const NewTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(NewTodo);
    res.status(201).json({ message: "created the todo.", createdTodo: NewTodo });
};
exports.createTodo = createTodo;
