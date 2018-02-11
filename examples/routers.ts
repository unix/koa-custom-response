import { ApiController } from './controllers'
const router = require('koa-router')()
const routers = router
  .get('/ok.json', ApiController.ok)
  .get('/ok/:message', ApiController.okWithMessage)
  .get('/no_content.json', ApiController.noContent)

export {
  routers,
}
