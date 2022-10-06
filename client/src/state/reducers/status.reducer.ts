import { ERROR_STATUS_ADDED, SUCCESS_STATUS_ADDED, STATUS_CLEARED } from '../actions/action.d';

const initState = {
  message: '',
  type: '',
};

const statusReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ERROR_STATUS_ADDED:
      return { ...state, message: action.payload, type: 'error' };
    case SUCCESS_STATUS_ADDED:
      return { ...state, message: action.payload, type: 'success' };
    case STATUS_CLEARED:
      return initState;
    default:
      return state;
  }
};

export default statusReducer;
