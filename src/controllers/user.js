import * as auth from './auth.js'
const User = require('../services/user')

export let login = async (ctx) => {
  let loginRs = await User.login(ctx.request.body.userInfo)
  ctx.body = {
    status: loginRs.code,
    message: loginRs.message
  }
  if (loginRs.code === 200) {
    let userInfo = { ...loginRs.userInfo }
    delete userInfo.u_pwd
    ctx.body.token = auth.signToken(ctx)
    ctx.body.userInfo = userInfo
  }
}

export let register = async (ctx) => {
  const { validateCode } = { ...ctx.request.body.userInfo }
  let message = [
    '验证码错误',
    '用户名已存在',
    '注册成功',
    '注册失败'
  ]
  if (validateCode.toLowerCase() !== ctx.session.captcha) {
    ctx.body = {
      status: 202,
      message: message[0]
    }
  } else {
    const registerRs = await User.addUser(ctx.request.body.userInfo)
    if (registerRs && registerRs.code === 203) {
      ctx.body = {
        status: 203,
        message: message[1]
      }
    } else if (registerRs && registerRs.code === 200) {
      ctx.body = {
        status: 200,
        message: message[2]
      }
    } else {
      ctx.body = {
        status: 500,
        message: registerRs.message
      }
    }
  }
}

export let update = async (ctx) => {
  // Nick Tel Sex Avatar
  const type = 'updateUser' + ctx.request.body.type
  const updateFunc = User[type]
  console.log(updateFunc)
  const updateRs = await updateFunc(ctx.request.body.userInfo)
  ctx.body = {
    status: updateRs.code,
    message: updateRs.message
  }
}

export let findUserById = async (ctx) => {
  const userId = ctx.query.u_id
  const userRs = await User.findUserById(userId)
  ctx.body = {
    status: userRs.code,
    message: userRs.message,
    user: userRs.user
  }
}
