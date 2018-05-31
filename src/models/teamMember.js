import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const teamMember = sequelize.define('team_member', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  t_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 't_id'
  },
  u_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'u_id'
  },
  cdate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'cdate'
  }
}, {
  timestamps: false,
  tableName: 'team_member'
})
