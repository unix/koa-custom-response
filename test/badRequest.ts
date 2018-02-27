import * as Utils from './utils.nyc'
import { expect } from 'chai'

describe('custom response: badRequest', (): void => {

  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })

  it('should return 400 status', async(): Promise<void> => {
    try {
      await this.server.get('/bad_request.json')
    } catch (e) {
      expect(e.status).to.equal(400)
    }
  })

  it('should return error object', async(): Promise<void> => {
    const message: string = 'request parameter error'
    const params: string = Utils.paramsToString({ error: message })
    try {
      await this.server.get(`/bad_request.json?${params}`)
    } catch (e) {
      expect(e.status).equal(400)
      expect(e.response.body).an('object')
        .to.have.property('error')
        .that.is.a('string').equal(message)
    }
  })

  it('should return error with message string', async(): Promise<void> => {
    const message: string = 'request parameter error'
    try {
      await this.server.get(`/bad_request/${message}`)
    } catch (e) {
      expect(e.status).equal(400)
      expect(e.response.body).an('object')
        .to.have.property('message')
        .that.is.a('string').equal(message)
    }
  })


})
