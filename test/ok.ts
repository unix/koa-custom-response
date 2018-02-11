import * as Utils from './utils.nyc'
import { expect } from 'chai'

describe('routers: session', () => {
  
  before(async () => {
    this.server = await Utils.app()
  })
  
  it('should return 200 status', async() => {
    const res = await this.server.get(`/ok.json`)
    expect(res.status).equal(200)
  })
  
  it('should return object', async() => {
    const params: string = Utils.paramsToString({ a: 1 })
    const res = await this.server.get(`/ok.json?${params}`)
    expect(res.status).equal(200)
    expect(res.body).an('object')
      .to.have.property('a')
      .that.is.a('string').equal('1')
  })
  
  it('should return message object', async() => {
    const res = await this.server.get(`/ok/hello`)
    expect(res.status).equal(200)
    expect(res.body).an('object')
      .to.have.property('message')
      .that.is.a('string').equal('hello')
  })
  
})
