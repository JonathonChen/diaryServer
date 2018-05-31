import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const ourPost = sequelize.define('our_post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  u_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'u_id'
  },
  t_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 't_id'
  },
  our_post_content: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'our_post_content'
  },
  our_post_cdate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'our_post_cdate'
  }
}, {
  timestamps: false,
  tableName: 'our_post'
})
