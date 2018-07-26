import HelloWorld from '../src/helloworld'
import { expect } from 'chai'

describe('HelloWorld', () => {
  it('greetings', () => {
    expect('greetings sylvain').equals(new HelloWorld().greetings('sylvain'))
  })
})
