const myPost = require('../services/myPost')

export let createDiary = async (ctx) => {
  // Nick Tel Sex Avatar
  const myPostRS = await myPost.createDiary(ctx.request.body.myPost)
  ctx.body = {
    status: myPostRS.code,
    message: myPostRS.message
  }
}
export let findMyDiary = async (ctx) => {
  const myPostRS = await myPost.findMyDiary(ctx.query.u_id)
  ctx.body = {
    status: myPostRS.code,
    message: myPostRS.message,
    post: myPostRS.post
  }
}
