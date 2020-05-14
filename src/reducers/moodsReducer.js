import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/actions';

const initialState = {
  coffee: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffee: Number(state['coffee']) + 1 };
    case EAT_SNACK:
      return { ...state, snacks: Number(state['snacks']) + 1 };
    case TAKE_NAP:
      return { ...state, naps: Number(state['naps']) + 1 };
    case STUDY:
      return { ...state, studies: Number(state['studies']) + 1 };
    default: return state;
  }
}
