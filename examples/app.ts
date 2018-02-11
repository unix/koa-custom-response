import * as Koa from 'koa'
import { easyResponse } from '../src/response'
import { routers } from './routers'
import { Server } from "http"

const createServer = async(): Promise<any> => {
  const app = new Koa()
  
  app.use(easyResponse())
  
  app.use(routers.routes()).use(routers.allowedMethods())
  
  return app
}

module.exports = (async() => {
  try {
    const app = await createServer()
    const server: Server = app.listen(3001, () => console.log('listening on 3001...'))
    return server
  } catch (e) {
    console.log(e)
  }
})()
