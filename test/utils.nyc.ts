import Timer = NodeJS.Timer
import * as server from '../examples/app'
import * as chai from 'chai'
import * as chaiHttp from 'chai-http'
import { ChaiHttp } from 'chai-http'
import { Server } from "http"

chai.use(chaiHttp)

let timer: Timer
const closeServer = (app: Server): void => {
  timer && clearTimeout(timer)
  timer = global.setTimeout(() => {
    app.close()
    clearTimeout(timer)
  }, 5000)
}

export const app = async(): Promise<ChaiHttp.Agent> => {
  const app: Server = await server
  closeServer(app)
  return chai.request(app)
}

export const paramsToString = (params: { [key: string]: any }): string => {
  return Object.keys(params)
    .reduce((str, next) => !str ? `${next}=${params[next]}` : `${str}&${next}=${params[next]}`, '')
}
