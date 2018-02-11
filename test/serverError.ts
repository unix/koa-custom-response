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
  
})
