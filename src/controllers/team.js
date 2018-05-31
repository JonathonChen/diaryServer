const Team = require('../services/team')
const TeamMember = require('../services/teamMember')
const User = require('../services/user')

export let createTeam = async (ctx) => {
  let rs = await Team.createTeam(ctx.request.body.team)
  ctx.body = {
    status: rs.code,
    message: rs.message
  }
}
export let searchTeam = async (ctx) => {
  let rs = await Team.searchTeam(ctx.query.search)
  ctx.body = {
    status: rs.code,
    message: rs.message,
    list: rs.list
  }
}
export let joinTeam = async (ctx) => {
  let rs = await TeamMember.joinTeam(ctx.request.body.join)
  ctx.body = {
    status: rs.code,
    message: rs.message
  }
}
export let findTeam = async (ctx) => {
  let userName = ctx.query.u_name
  const rs = await TeamMember.findTeam(userName) // 找到用户加入的团队
  if (rs.code === 200) {
    ctx.body = {
      status: rs.code,
      message: rs.message,
      teams: rs.teams
    }
  } else {
    ctx.body = {
      status: rs.code,
      message: rs.message
    }
  }
}
export let findTeamMember = async (ctx) => {
  let members = await TeamMember.findTeamMember(ctx.query.t_id) // 找到团队成员的信息
  let memeberIds = members.members.map(item => {
    return item.u_id
  })
  let rs = await User.findUsersById(memeberIds)
  if (rs.code === 200) {
    ctx.body = {
      status: rs.code,
      message: rs.message,
      members: rs.users
    }
  } else {
    ctx.body = {
      status: rs.code,
      message: rs.message
    }
  }
}
export let findTeamInfo = async (ctx) => {
  let teamId = ctx.query.t_id
  const rs = await Team.findTeamInfo(teamId) // 找到团队的详细信息
  if (rs.code === 200) {
    ctx.body = {
      status: rs.code,
      message: rs.message,
      teamsInfo: rs.team
    }
  } else {
    ctx.body = {
      status: rs.code,
      message: rs.message
    }
  }
}
