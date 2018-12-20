import { testFunc } from './exampleFunction'


describe('Test example function', () => {
  it('Should ad 5 and 6 and result should be 110', () => {
    expect(testFunc(5,6)).toEqual(110);
  })
});
