import { GETTING_FAILED, GETTING_TIME } from '../actions/action.d';

const initState = {
  getting: false,
};

const getReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GETTING_TIME:
      return { ...state, getting: true };
    case GETTING_FAILED:
      return { ...state, getting: false };
    default:
      return state;
  }
};

export default getReducer;
