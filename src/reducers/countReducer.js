import { DECREMENT, INCREMENT, RESET, HACK } from "../actions/countActions";

const initState = {
  count: 0,
};

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    case RESET:
      return { count: 0 };

    case HACK:
      return { count: action.point };

    default:
      return state;
  }
};

export { countReducer };
