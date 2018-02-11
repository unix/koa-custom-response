import * as Utils from './utils.nyc'
import { expect } from 'chai'
import { ChaiHttp } from 'chai-http'

describe('custom response: ok', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 200 status', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/ok.json')
    expect(res.status).equal(200)
  })
  
  it('should return object', async(): Promise<void> => {
    const params: string = Utils.paramsToString({ a: 1 })
    const res: ChaiHttp.Response = await this.server.get(`/ok.json?${params}`)
    
    expect(res.status).equal(200)
    expect(res.body).an('object')
      .to.have.property('a')
      .that.is.a('string').equal('1')
  })
  
  it('should return message object', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get(`/ok/hello`)
    expect(res.status).equal(200)
    expect(res.body).an('object')
      .to.have.property('message')
      .that.is.a('string').equal('hello')
  })
  
})
