const Tag = require('../services/tag')

export let getTags = async (ctx) => {
  // Nick Tel Sex Avatar
  const tags = await Tag.findTag(ctx.query.type)
  ctx.body = {
    status: tags.code,
    message: tags.message,
    tags: tags.tags
  }
}
