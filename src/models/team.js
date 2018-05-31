import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const team = sequelize.define('team', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  t_name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: 't_name'
  },
  t_pwd: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: 't_pwd'
  },
  t_desc: {
    type: Sequelize.STRING(200),
    allowNull: true,
    field: 't_desc'
  },
  t_mid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 't_mid'
  },
  t_avatar_url: {
    type: Sequelize.STRING(100),
    defaultValue: 'http://ov5eewsja.bkt.clouddn.com/images/5-service-7.png',
    allowNull: false,
    field: 't_avatar_url'
  },
  t_cdate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 't_cdate'
  }
}, {
  timestamps: false,
  tableName: 'team'
})
