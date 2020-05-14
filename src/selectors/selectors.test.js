import { getCoffee, getSnacks, getNaps, getStudies } from './selectors';

describe ('selectors', () => {

  const state = { coffee: 0, snacks: 1, naps: 2, studies: 3 };

  it('gets coffee', () => {
    const coffee = getCoffee(state);
    expect(coffee).toEqual(0);
  });

  it('gets snacks', () => {
    const snacks = getSnacks(state);
    expect(snacks).toEqual(1);
  });

  it('gets coffee', () => {
    const naps = getNaps(state);
    expect(naps).toEqual(2);
  });

  it('gets coffee', () => {
    const studies = getStudies(state);
    expect(studies).toEqual(3);
  });

});
