import { ApiController } from './controllers'
const router = require('koa-router')()
const routers = router
  .get('/ok.json', ApiController.ok)
  .get('/ok/:message', ApiController.okWithMessage)
  
  .get('/no_content.json', ApiController.noContent)
  
  .get('/server_error.json', ApiController.serverError)
  .get('/server_error/:message', ApiController.serverErrorWithMessage)
  
  .get('/not_found.json', ApiController.notFound)
  .get('/not_found/:message', ApiController.notFoundWithMessage)
  
  .get('/forbidden.json', ApiController.forbidden)
  .get('/forbidden/:message', ApiController.forbiddenWithMessage)

export {
  routers,
}
