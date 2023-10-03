import request from 'supertest'

import { server } from '../src/server'

describe('Example API', () => {
  it('Should return a "Hello World"', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })
})