import * as Koa from 'koa'
import { KoaCustomResponse } from '../src/response'
import { routers } from './routers'
import { Server } from "http"

const createServer = async(): Promise<Koa> => {
  const app: Koa = new Koa()
  
  app.use(KoaCustomResponse())
  
  app.use(routers.routes()).use(routers.allowedMethods())
  
  return app
}

module.exports = (async(): Promise<Server> => {
  try {
    const app = await createServer()
    const server: Server = app.listen(3001, () => console.log('listening on 3001...'))
    return server
  } catch (e) {
    console.log(e)
  }
})()
