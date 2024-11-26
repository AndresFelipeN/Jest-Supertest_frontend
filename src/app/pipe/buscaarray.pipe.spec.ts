import { BuscaarrayPipe } from './buscaarray.pipe';

describe('BuscaarrayPipe', () => {
  it('create an instance', () => {
    const pipe = new BuscaarrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('cbyscar posicion de un array con paramentros ', () => {
    const pipe = new BuscaarrayPipe();
    expect(pipe.transform(["a","b","c"],1)).toEqual("b");
  });

  it('cbyscar posicion de un array sin paramentros ', () => {
    const pipe = new BuscaarrayPipe();
    expect(pipe.transform(["a","b","c"],)).toEqual("a");
  });
});
