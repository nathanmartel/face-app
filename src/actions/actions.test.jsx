import { drinkCoffee, DRINK_COFFEE } from './actions'

describe('actions', () => {
  it('drinks coffee (DRINK_COFFEE action)', () => {
    const action = drinkCoffee();
    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  })
});
