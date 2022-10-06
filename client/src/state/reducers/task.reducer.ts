import { TASKS_GOT } from '../actions/action.d';

const initState = {
  tasks: [],
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case TASKS_GOT:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default userReducer;
