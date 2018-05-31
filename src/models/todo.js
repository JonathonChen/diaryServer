import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const todo = sequelize.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  u_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'u_id'
  },
  tag_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'tag_id'
  },
  todo_content: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'todo_content'
  },
  todo_cdate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'todo_cdate'
  },
  todo_udate: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'todo_udate'
  },
  todo_title: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'todo_title'
  },
  todo_isDelete: {
    type: Sequelize.STRING(1),
    allowNull: false,
    defaultValue: '0',
    field: 'todo_isDelete'
  },
  todo_isLocked: {
    type: Sequelize.STRING(1),
    allowNull: false,
    defaultValue: '0',
    field: 'todo_isLocked'
  }
}, {
  timestamps: false,
  tableName: 'todos'
})
