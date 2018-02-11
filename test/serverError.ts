import * as Utils from './utils.nyc'
import { expect } from 'chai'

describe('custom response: serverError', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 500 status', async(): Promise<void> => {
    try {
      await this.server.get('/server_error.json')
    } catch (e) {
      expect(e.status).equal(500)
    }
  })
  
  it('should return error object', async(): Promise<void> => {
    const message: string = 'server error'
    const params: string = Utils.paramsToString({ error: message })
    try {
      await this.server.get(`/server_error.json?${params}`)
    } catch (e) {
      expect(e.status).equal(500)
      expect(e.response.body).an('object')
        .to.have.property('error')
        .that.is.a('string').equal(message)
    }
  })
  
  it('should return error with message string', async(): Promise<void> => {
    const message: string = 'server error'
    try {
      await this.server.get(`/server_error/${message}`)
    } catch (e) {
      expect(e.status).equal(500)
      expect(e.response.body).an('object')
        .to.have.property('message')
        .that.is.a('string').equal(message)
    }
  })
  
})
