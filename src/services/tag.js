import { tag as tagModel } from '../models/tag'

function TagService () {
}

TagService.prototype.addTag = async (data) => {
  try {
    const user = {
      tag_label: data.label,
      tag_type: data.type
    }
    await tagModel.create(user)
    return { code: 200, message: '添加成功' }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TagService.prototype.findTag = async (data) => {
  try {
    let tags = await tagModel.findAll({
      where: {
        tag_type: data
      }
    })
    return { code: 200, message: '查找成功', tags }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
TagService.prototype.updateTag = async (data) => {
  try {
    let user = await tagModel.update({
      tag_label: data.label
    }, {
      where: { id: data.id }
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
TagService.prototype.deleteTag = async (data) => {
  try {
    let tag = await tagModel.findOne({
      where: {
        id: data.id
      }
    })
    if (!tag) {
      return { code: 201, message: '标签不存在', id: data.id }
    }
    await tagModel.destroy({
      where: {
        id: data.id
      }
    })
    return { code: 200, message: '删除成功', id: data.id }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}

module.exports = new TagService()
