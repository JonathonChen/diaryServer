import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const mood = sequelize.define('mood', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  mood_label: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'mood_label'
  },
  mood_url: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'mood_url'
  }
}, {
  timestamps: false,
  tableName: 'mood'
})
