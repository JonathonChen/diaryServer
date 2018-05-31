const future = require('../services/future')

export let createFuture = async (ctx) => {
  // Nick Tel Sex Avatar
  const futureRS = await future.createFuture(ctx.request.body.future)
  ctx.body = {
    status: futureRS.code,
    message: futureRS.message
  }
}
export let findFuture = async (ctx) => {
  const futureRS = await future.findFuture(ctx.query.u_id)
  ctx.body = {
    status: futureRS.code,
    message: futureRS.message,
    futureList: futureRS.futureList
  }
}
