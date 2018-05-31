import { ourPost as ourPostModel } from '../models/ourPost'
import { user as userModel } from '../models/user'

function OurPostService () {
}

OurPostService.prototype.createDiary = async (data) => {
  try {
    data.our_post_cdate = new Date()
    const user = await userModel.find({
      where: {
        u_name: data.u_name
      }
    })
    delete data.u_name
    data.u_id = user.dataValues.id
    await ourPostModel.create(data)
    return { code: 200, message: '添加成功' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
OurPostService.prototype.findTeamPosts = async (teamId) => {
  try {
    const posts = await ourPostModel.findAll({
      where: {
        t_id: teamId
      }
    })
    return { code: 200, message: '查找成功', posts }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
module.exports = new OurPostService()
