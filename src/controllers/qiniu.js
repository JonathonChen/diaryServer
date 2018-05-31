import { QiniuKyes as qiniuKeys } from '../config'
import qiniu from 'qiniu'

export let getQiniuToken = (ctx) => {
  // 鉴权
  const {accessKey, secretKey} = {...qiniuKeys}
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  const options = {
    scope: 'diary',
    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)","domain":"$(x:domain)"}'
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  ctx.body = {
    status: 201
  }
  if (uploadToken) {
    ctx.set('Cache-Control', 'max-age=0, private, must-revalidate')
    ctx.set('Pragma', 'no-cache')
    ctx.set('Expires', 0)
    ctx.body = {
      status: 200,
      uploadToken,
      domain: qiniuKeys.domain
    }
  }
}
