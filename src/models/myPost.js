import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'

export const myPost = sequelize.define('my_posts', {
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
  mood_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'mood_id'
  },
  weather_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'weather_id'
  },
  tag_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'tag_id'
  },
  my_post_imgUrls: {
    type: Sequelize.STRING(1000),
    allowNull: true,
    field: 'my_post_imgUrls'
  },
  my_post_content: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'my_post_content'
  },
  my_post_position: {
    type: Sequelize.STRING(200),
    allowNull: true,
    field: 'my_post_position'
  },
  my_post_cdate: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'my_post_cdate'
  },
  my_post_udate: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'my_post_udate'
  },
  my_post_type: {
    type: Sequelize.STRING(1),
    allowNull: false,
    field: 'my_post_type'
  }
}, {
  timestamps: false,
  tableName: 'my_posts'
})
