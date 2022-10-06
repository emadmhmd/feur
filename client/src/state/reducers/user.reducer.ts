import { PROFILE_GOT, SIGNIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/action.d';

const initState = {
  profile: {},
  isAuth: false,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case PROFILE_GOT:
      return { ...state, profile: action.payload };
    case SIGNIN_SUCCESS:
      return { ...state, isAuth: true };
    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export default userReducer;
