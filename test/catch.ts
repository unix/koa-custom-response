import * as Utils from './utils.nyc'
import { expect } from 'chai'

describe('custom response: catch', (): void => {
  
  before(async (): Promise<void> => {
    this.server = await Utils.app()
  })
  
  it('should return 501 status', async(): Promise<void> => {
    try {
      await this.server.get('/catch_error.json')
    } catch (e) {
      expect(e.status).to.equal(501)
    }
  })
  
  it('should return type error', async(): Promise<void> => {
    try {
      await this.server.get('/catch_error.json')
    } catch (e) {
      expect(e.status).to.equal(501)
      expect(e.response.body).an('object')
        .to.have.property('errors')
        .that.is.a('object')
        .to.have.property('name')
        .equal('TypeError')
    }
  })
  
  it('should return extra error message', async(): Promise<void> => {
    const message: string = 'ohhhh... server error'
    const params: string = Utils.paramsToString({ test: message })
    try {
      await this.server.get(`/catch_error.json?${params}`)
    } catch (e) {
      expect(e.status).to.equal(501)
      expect(e.response.body).an('object')
        .to.have.property('test')
        .that.is.a('string').equal(message)
    }
  })

  it('should return error with custom message', async(): Promise<void> => {
    const message: string = 'ohhhh... server error'
    try {
      await this.server.get(`/catch_error/${message}`)
    } catch (e) {
      expect(e.status).to.equal(501)
      expect(e.response.body).an('object')
        .to.have.property('errors')
        .that.is.a('string').equal(message)
    }
  })

  it('should return a null error', async(): Promise<void> => {
    try {
      await this.server.get(`/catch_null.json`)
    } catch (e) {
      expect(e.status).to.equal(501)
      expect(e.response.body).an('object')
        .to.have.property('errors')
        .that.is.a('null')
    }
  })

  it('should return a empty string when catch undefined error', async(): Promise<void> => {
    try {
      await this.server.get(`/catch_undefined.json`)
    } catch (e) {
      expect(e.status).to.equal(501)
      expect(e.response.body).an('object')
        .to.have.property('errors')
        .that.is.a('string')
        .equal('')
    }
  })


})
