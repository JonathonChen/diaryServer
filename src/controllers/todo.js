const Todo = require('../services/todo')
export let addTodo = async (ctx) => {
  // Nick Tel Sex Avatar
  const todoRS = await Todo.addTodo(ctx.request.body.todo)
  ctx.body = {
    status: todoRS.code,
    message: todoRS.message,
    todo: todoRS.todo
  }
}
export let findTodoById = async (ctx) => {
  // Nick Tel Sex Avatar
  const todoRS = await Todo.findTodoById(ctx.query.u_id)
  ctx.body = {
    status: todoRS.code,
    message: todoRS.message,
    todoList: todoRS.todoList
  }
}
export let updateTodo = async (ctx) => {
  // Nick Tel Sex Avatar
  const todoRS = await Todo.updateTodo(ctx.request.body.todo)
  ctx.body = {
    status: todoRS.code,
    message: todoRS.message,
    todo: todoRS.todo
  }
}
export let deleteTodo = async (ctx) => {
  // Nick Tel Sex Avatar
  const todoRS = await Todo.addTodo(ctx.query.todo_id)
  ctx.body = {
    status: todoRS.code,
    message: todoRS.message,
    id: todoRS.id
  }
}
