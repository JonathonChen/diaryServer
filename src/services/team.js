import { team as teamModel } from '../models/team'
import { user as userModel } from '../models/user'
import Sequelize from 'sequelize'
const TeamMember = require('../services/teamMember')

const Op = Sequelize.Op

function TeamService () {
}

TeamService.prototype.createTeam = async (data) => {
  try {
    data.t_cdate = new Date()
    const user = await userModel.find({
      where: {
        u_name: data.u_name
      }
    })
    const userName = data.u_name
    delete data.u_name
    data.t_mid = user.dataValues.id
    const team = await teamModel.create(data)
    const join = {
      t_id: team.dataValues.id,
      t_pwd: data.t_pwd,
      u_name: userName
    }
    await TeamMember.joinTeam(join) // 创建的同时加入团队
    return { code: 200, message: '创建成功' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TeamService.prototype.searchTeam = async (data) => {
  try {
    const list = await teamModel.findAll({
      where: {
        t_name: {
          [Op.like]: '%' + data + '%'
        }
      }
    })
    return { code: 200, message: '查找成功', list }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TeamService.prototype.findTeamById = async (userId) => {
  try {
    const team = await teamModel.find({
      where: {
        u_mid: userId
      }
    })
    return { code: 200, message: '查找成功', team }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TeamService.prototype.findTeamInfo = async (teamId) => {
  try {
    const team = await teamModel.find({
      where: {
        id: teamId
      }
    })
    return { code: 200, message: '查找成功', team }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
module.exports = new TeamService()
