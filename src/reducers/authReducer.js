import {
  SAVE_USER_AND_TOKEN,
  CLEAR_USER_AND_TOKEN,
} from "../actions/authActions";

const initState = {
  user: {},
  token: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_USER_AND_TOKEN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case CLEAR_USER_AND_TOKEN:
      return initState;

    default:
      return state;
  }
};

export { authReducer };
