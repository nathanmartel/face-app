import { drinkCoffee } from '../actions/actions';
import reducer from './moodsReducer';

describe('moods reducer', () => {
  it('drinks coffee', () => {
    const state = { coffee: 0 };
    const action = drinkCoffee();
    const newState = reducer(state, action);
    expect(newState).toEqual({ coffee: 1 });
  })

});