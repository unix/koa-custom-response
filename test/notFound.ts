import * as Utils from './utils.nyc'
import { expect } from 'chai'

describe('custom response: notFound', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 404 status', async(): Promise<void> => {
    try {
      await this.server.get('/not_found.json')
    } catch (e) {
      expect(e.status).to.equal(404)
    }
  })
  
  it('should return error object', async(): Promise<void> => {
    const message: string = 'not found anything'
    const params: string = Utils.paramsToString({ error: message })
    try {
      await this.server.get(`/not_found.json?${params}`)
    } catch (e) {
      expect(e.status).equal(404)
      expect(e.response.body).an('object')
        .to.have.property('error')
        .that.is.a('string').equal(message)
    }
  })
  
  it('should return error with message string', async(): Promise<void> => {
    const message: string = 'not found anything'
    try {
      await this.server.get(`/not_found/${message}`)
    } catch (e) {
      expect(e.status).equal(404)
      expect(e.response.body).an('object')
        .to.have.property('message')
        .that.is.a('string').equal(message)
    }
  })
  
  
})
