import { getHelloWorld } from '../src/utils.js';

describe('getHelloWorld tests', () => {
  it('should return "Hello World"', () => {
    expect(getHelloWorld()).toEqual('Hello World');
  });
});
