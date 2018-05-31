import { user as userModel } from '../models/user'
import { teamMember as teamMemberModel } from '../models/teamMember'
import { team as teamModel } from '../models/team'


function TeamMemberService () {
}

TeamMemberService.prototype.joinTeam = async (data) => {
  try {
    const user = await userModel.find({
      where: {
        u_name: data.u_name
      }
    })
    // const existed = await teamModel.find({
    //   where: {
    //     t_mid: user.dataValues.id // 管理员
    //   }
    // })
    const existed2 = await teamMemberModel.find({
      where: {
        t_id: data.t_id,
        u_id: user.dataValues.id // 团队成员
      }
    })
    if (existed2) {
      return { code: 202, message: '你已经加入过团队了~' }
    }
    const team = await teamModel.find({
      where: {
        id: data.t_id
      }
    })
    if (team.dataValues.t_pwd === data.t_pwd) {
      const member = {
        u_id: user.dataValues.id,
        t_id: data.t_id,
        cdate: new Date()
      }
      await teamMemberModel.create(member)
      return { code: 200, message: '加入成功' }
    } else {
      return { code: 201, message: '密码错误' }
    }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TeamMemberService.prototype.findTeam = async (userName) => {
  try {
    const user = await userModel.find({
      where: {
        u_name: userName
      }
    })
    let userId = user.dataValues.id
    const teams = await teamMemberModel.findAll({ // 用户加入的团队
      where: {
        u_id: userId
      }
    })
    return {code: 200, message: '查找成功', teams}
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TeamMemberService.prototype.findTeamMember = async (teamId) => {
  try {
    const members = await teamMemberModel.findAll({ // 用户加入的团队
      where: {
        t_id: teamId
      }
    })
    return {code: 200, message: '查找成功', members}
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
module.exports = new TeamMemberService()
