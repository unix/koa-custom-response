import * as Utils from './utils.nyc'
import { expect } from 'chai'

describe('custom response: forbidden', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 403 status', async(): Promise<void> => {
    try {
      await this.server.get('/forbidden.json')
    } catch (e) {
      expect(e.status).equal(403)
    }
  })
  
  it('should return error object', async(): Promise<void> => {
    const message: string = 'permissions without operation'
    const params: string = Utils.paramsToString({ error: message })
    try {
      await this.server.get(`/forbidden.json?${params}`)
    } catch (e) {
      expect(e.status).equal(403)
      expect(e.response.body).an('object')
        .to.have.property('error')
        .that.is.a('string').equal(message)
    }
  })
  
  it('should return error with message string', async(): Promise<void> => {
    const message: string = 'permissions without operation'
    try {
      await this.server.get(`/forbidden/${message}`)
    } catch (e) {
      expect(e.status).equal(403)
      expect(e.response.body).an('object')
        .to.have.property('message')
        .that.is.a('string').equal(message)
    }
  })
  
})
