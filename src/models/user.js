import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const user = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  u_name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: 'u_name'
  },
  u_pwd: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: 'u_pwd'
  },
  u_sex: {
    type: Sequelize.STRING(1),
    defaultValue: '0',
    allowNull: false,
    field: 'u_sex'
  },
  u_nick: {
    type: Sequelize.STRING(50),
    allowNull: true,
    field: 'u_nick'
  },
  u_type: {
    type: Sequelize.STRING(1),
    defaultValue: '0',
    allowNull: false,
    field: 'u_type'
  },
  u_tel: {
    type: Sequelize.STRING(11),
    allowNull: true,
    field: 'u_tel'
  },
  u_avatar_url: {
    type: Sequelize.STRING(100),
    defaultValue: 'http://ov5eewsja.bkt.clouddn.com/images/5-service-7.png',
    allowNull: false,
    field: 'u_avatar_url'
  }
}, {
  timestamps: false,
  tableName: 'users'
})
