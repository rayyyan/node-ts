import { RequestHandler } from "express"
import { Todo } from "../models/todo"

const TODOS: Todo[] = []
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text
  const NewTodo = new Todo(Math.random().toString(), text)
  TODOS.push(NewTodo)
  res.status(201).json({ message: "created the todo.", createdTodo: NewTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS })
}
