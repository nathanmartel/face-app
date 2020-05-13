import { DRINK_COFFEE } from '../actions/actions';

const initialState = {
  coffee: 0,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { coffee: Number(state.coffee) + 1}
    
    default: return state;
  }
}