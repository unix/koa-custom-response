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
      console.log(e.status)
      expect(e.status).to.equal(404)
    }
  })
  
  
})
