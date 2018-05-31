import { future as futureModel } from '../models/future'

function FutureService () {
}

FutureService.prototype.createFuture = async (data) => {
  try {
    data.future_cdate = new Date()
    console.log(data.future_cdate)
    await futureModel.create(data)
    return { code: 200, message: '添加成功' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
FutureService.prototype.findFuture = async (userId) => {
  console.log(userId)
  try {
    const futureList = await futureModel.findAll({
      where: {
        u_id: userId
      }
    })
    return { code: 200, message: '查找成功', futureList }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
module.exports = new FutureService()
