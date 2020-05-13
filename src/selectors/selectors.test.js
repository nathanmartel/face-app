import { getCoffee } from './selectors';

describe ('selectors', () => {
  it('gets coffee', () => {
    const state = { coffee: 0 };
    const coffee = getCoffee(state);
    expect(coffee).toEqual({ coffee: 0 })
  });
});
