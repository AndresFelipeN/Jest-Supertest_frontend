import { MayusculaPipe } from './mayuscula.pipe';

describe('MayusculaPipe', () => {
  it('create an instance', () => {
    const pipe = new MayusculaPipe();
    expect(pipe).toBeTruthy();
  });
  it("debe convertir un texto a mayuscula", () => {
    const pipe = new MayusculaPipe
    expect(pipe.transform('hello')).toBe("HELLO")
  })
});
