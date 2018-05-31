import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const tag = sequelize.define('tags', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  tag_label: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: 'tag_label'
  },
  tag_type: {
    type: Sequelize.STRING(1),
    allowNull: false,
    field: 'tag_type'
  }
}, {
  timestamps: false,
  tableName: 'tags'
})
