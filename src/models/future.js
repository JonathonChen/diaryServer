import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const future = sequelize.define('future', {
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
  future_name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: 'future_name'
  },
  future_date: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'future_date'
  },
  future_cdate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'future_cdate'
  },
  future_words: {
    type: Sequelize.STRING(1000),
    allowNull: false,
    field: 'future_words'
  },
  future_bg: {
    type: Sequelize.STRING(200),
    allowNull: false,
    field: 'future_bg'
  }
}, {
  timestamps: false,
  tableName: 'future'
})
