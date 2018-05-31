import { user as userModel } from '../models/user'
import Sequelize from 'sequelize'

const Op = Sequelize.Op
function UserService () {
}

UserService.prototype.addUser = async (data) => {
  try {
    let olderUser = await userModel.find({
      where: {
        u_name: data.userName
      }
    })
    if (olderUser) {
      return { code: 203, message: '用户已存在' }
    }
    const user = {
      u_name: data.userName,
      u_pwd: data.userPwd
    }
    await userModel.create(user)
    return { code: 200, message: '注册成功' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.login = async (data) => {
  try {
    let user = await userModel.find({
      where: {
        u_name: data.userName,
        u_pwd: data.userPwd
      }
    })
    if (user) {
      return { code: 200, message: '登录成功', userInfo: user.dataValues }
    }
    return { code: 201, message: '用户名或密码错误' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.updateUserAvatar = async (data) => {
  try {
    let user = await userModel.update({
      u_avatar_url: data.u_avatar_url
    }, {
      where: { u_name: data.u_name }
    })
    if (user) {
      return { code: 200, message: '修改成功' }
    } else {
      return { code: 201, message: '修改失败，找不到该用户' }
    }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.updateUserSex = async (data) => {
  try {
    let user = await userModel.update({
      u_sex: data.u_sex
    }, {
      where: { u_name: data.u_name }
    })
    if (user) {
      return { code: 200, message: '修改成功' }
    } else {
      return { code: 201, message: '修改失败，找不到该用户' }
    }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.updateUserNick = async (data) => {
  try {
    let user = await userModel.update({
      u_nick: data.u_nick
    }, {
      where: { u_name: data.u_name }
    })
    if (user) {
      return { code: 200, message: '修改成功' }
    } else {
      return { code: 201, message: '修改失败，找不到该用户' }
    }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.updateUserTel = async (data) => {
  try {
    let user = await userModel.update({
      u_tel: data.u_tel
    }, {
      where: { u_name: data.u_name }
    })
    if (user) {
      return { code: 200, message: '修改成功' }
    } else {
      return { code: 201, message: '修改失败，找不到该用户' }
    }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.findUsersById = async (membersId) => {
  try {
    const users = await userModel.findAll({
      where: {
        id: {
          [Op.in]: membersId
        }
      }
    })
    return {code: 200, message: '查找成功', users}
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
UserService.prototype.findUserById = async (userId) => {
  try {
    const user = await userModel.findAll({
      where: {
        id: userId
      }
    })
    return {code: 200, message: '查找成功', user}
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
module.exports = new UserService()
