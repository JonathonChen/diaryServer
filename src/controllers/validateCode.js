import * as validateCode from '../services/validateCode'

export let getValidateCode = (ctx) => {
  ctx.body = {
    validateCode: validateCode.getValidateCode(ctx)
  }
}
