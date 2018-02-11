import * as Utils from './utils.nyc'
import { expect } from 'chai'
import { ChaiHttp } from 'chai-http'

describe('custom response: created', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 201 status', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/created.json')
    expect(res.status).equal(201)
  })
  
  it('should return object', async(): Promise<void> => {
    const params: string = Utils.paramsToString({ data: 'test case' })
    const res: ChaiHttp.Response = await this.server.get(`/created.json?${params}`)
    
    expect(res.status).equal(201)
    expect(res.body).an('object')
      .to.have.property('data')
      .that.is.a('string').equal('test case')
  })
  
  it('should return message object', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get(`/created/test`)
    expect(res.status).equal(201)
    expect(res.body).an('object')
      .to.have.property('message')
      .that.is.a('string').equal('test')
  })
  
})
