import { todo as todoModel } from '../models/todo'

function TodoService () {
}

TodoService.prototype.addTodo = async (data) => {
  try {
    data.todo_cdate = new Date()
    const todo = await todoModel.create(data)
    return { code: 200, message: '添加成功', todo }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TodoService.prototype.findTodoById = async (userId) => {
  try {
    let todoList = await todoModel.findAll({
      where: {
        u_id: userId
      }
    })
    return { code: 200, message: '查找成功', todoList }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TodoService.prototype.updateTodo = async (data) => {
  try {
    let todo = await todoModel.update({
      todo_udate: new Date(),
      todo_content: data.todo_content,
      todo_title: data.todo_title,
      todo_isDelete: data.todo_isDelete,
      todo_isLocked: data.todo_isLocked,
      tag_id: data.tag_id
    }, {
      where: { id: data.id }
    })
    if (todo) {
      return { code: 200, message: '修改成功', todo }
    } else {
      return { code: 201, message: '修改失败，找不到该用户' }
    }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TodoService.prototype.deleteTodo = async (todoId) => {
  try {
    await todoModel.destroy({
      where: {
        id: todoId
      }
    })
    return { code: 200, message: '删除成功', id: todoId }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}

module.exports = new TodoService()
