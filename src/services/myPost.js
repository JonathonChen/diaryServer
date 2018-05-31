import { myPost as myPostModel } from '../models/myPost'
import { user as userModel } from '../models/user'

function MyPostService () {
}

MyPostService.prototype.createDiary = async (data) => {
  try {
    data.my_post_cdate = new Date()
    const user = await userModel.find({
      where: {
        u_name: data.u_name
      }
    })
    delete data.u_name
    data.u_id = user.dataValues.id
    await myPostModel.create(data)
    return { code: 200, message: '添加成功' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
MyPostService.prototype.findMyDiary = async (userId) => {
  try {
    const post = await myPostModel.findAll({
      where: {
        u_id: userId
      }
    })
    return { code: 200, message: '查找成功', post }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
module.exports = new MyPostService()
