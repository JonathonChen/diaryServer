const Mood = require('../services/mood')

export let getMoods = async (ctx) => {
  // Nick Tel Sex Avatar
  const moods = await Mood.findMood()
  ctx.body = {
    status: moods.code,
    message: moods.message,
    moods: moods.moods
  }
}
export let findMoodById = async (ctx) => {
  // Nick Tel Sex Avatar
  const moodRS = await Mood.findMoodById(ctx.query.mood_id)
  ctx.body = {
    status: moodRS.code,
    message: moodRS.message,
    mood: moodRS.mood
  }
}
