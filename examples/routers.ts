import { ApiController } from './controllers'
const router = require('koa-router')()
const routers = router
  .get('/ok', ApiController.ok)

export {
  routers,
}
