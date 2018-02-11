import Timer = NodeJS.Timer
import * as server from '../examples/app'
import * as chai from 'chai'
import * as chaiHttp from 'chai-http'
import { ChaiHttp } from 'chai-http'

chai.use(chaiHttp)

let timer: Timer
const closeServer = () => {
  timer && clearTimeout(timer)
  timer = global.setTimeout(() => {
    process.exit(0)
    clearTimeout(timer)
  }, 2000)
}

export const app = async(): Promise<ChaiHttp.Agent> => {
  closeServer()
  return chai.request(await server)
}

export const paramsToString: Function = (params: { [key: string]: any }): string => {
  return Object.keys(params)
    .reduce((str, next) => !str ? `${next}=${params[next]}` : `${str}&${next}=${params[next]}`, '')
}
