import * as Utils from './utils.nyc'
import { expect } from 'chai'
import { ChaiHttp } from 'chai-http'

describe('custom response: reply', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 200 status', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/reply.json')
    expect(res.status).equal(200)
  })
  
  it('should return object', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/reply.json')
    expect(res.status).equal(200)
    expect(res.body).an('object')
      .to.have.property('code')
      .that.is.a('number').equal(100)
  })
  
  it('should return message object', async(): Promise<void> => {
    const message: string = 'hello'
    const res: ChaiHttp.Response = await this.server.get(`/reply/${message}`)
    expect(res.status).equal(200)
    expect(res.body).an('object')
      .to.have.property('message')
      .that.is.a('string').equal(message)
  })
  
})
