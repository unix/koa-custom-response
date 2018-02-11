import * as Utils from './utils.nyc'
import { expect } from 'chai'
import { ChaiHttp } from 'chai-http'

describe('custom response: noContent', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 204 status', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/no_content.json')
    expect(res.status).equal(204)
  })
  
  it('should nothing returns', async(): Promise<void> => {
    const res: ChaiHttp.Response = await this.server.get('/no_content.json')
    expect(res.status).equal(204)
    expect(res.body).to.be.empty
  })
  
})
