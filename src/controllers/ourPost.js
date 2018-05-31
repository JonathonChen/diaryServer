const ourPost = require('../services/ourPost')

export let createDiary = async (ctx) => {
  // Nick Tel Sex Avatar
  const ourPostRS = await ourPost.createDiary(ctx.request.body.ourPost)
  ctx.body = {
    status: ourPostRS.code,
    message: ourPostRS.message
  }
}

export let findTeamPosts = async (ctx) => {
  // Nick Tel Sex Avatar
  const ourPostRS = await ourPost.findTeamPosts(ctx.query.t_id)
  ctx.body = {
    status: ourPostRS.code,
    message: ourPostRS.message,
    posts: ourPostRS.posts
  }
}

