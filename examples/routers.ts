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
  
  .get('/bad_request.json', ApiController.badRequest)
  .get('/bad_request/:message', ApiController.badRequestWithMessage)
  
  .get('/created.json', ApiController.created)
  .get('/created/:message', ApiController.createdWithMessage)

  .get('/catch_error.json', ApiController.catch)
  .get('/catch_error/:message', ApiController.catchWithMessage)
  .get('/catch_null.json', ApiController.catchWithNull)
  .get('/catch_undefined.json', ApiController.catchWithUndefined)

  .get('/reply.json', ApiController.reply)
  .get('/reply/:message', ApiController.replyWithMessage)

export {
  routers,
}
