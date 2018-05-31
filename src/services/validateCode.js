export let getValidateCode = (ctx) => {
  const svgCaptcha = require('svg-captcha')
  let captcha = svgCaptcha.create({
    // 翻转颜色
    inverse: false,
    // 字体大小
    fontSize: 36,
    // 噪声线条数
    noise: 3,
    // 宽度
    width: 80,
    // 高度
    height: 30
  })
  // 存入 session
  // ctx.cookies.set('captcha', captcha.text.toLowerCase(), {
  //   signed: true
  // })
  ctx.session.captcha = captcha.text.toLowerCase()
  return captcha.data
}
