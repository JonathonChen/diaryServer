import { mood as moodModel } from '../models/mood'

function MoodService () {
}


MoodService.prototype.findMood = async () => {
  try {
    let moods = await moodModel.findAll()
    return { code: 200, message: '查找成功', moods }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}
MoodService.prototype.findMoodById = async (moodId) => {
  try {
    let mood = await moodModel.find({
      where: {
        id: moodId
      }
    })
    return { code: 200, message: '查找成功', mood }
  } catch (err) {
    return {code: 500, message: new Error(err).toString()}
  }
}

module.exports = new MoodService()
