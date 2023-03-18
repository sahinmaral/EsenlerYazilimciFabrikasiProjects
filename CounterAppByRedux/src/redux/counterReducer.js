import { actionTypes } from "./actionTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return { counter: state.counter+1 };
    case actionTypes.DECREASE_COUNTER:
      return { counter: state.counter-1 };
    case actionTypes.RESET_COUNTER:
      return { counter: 0 };
    default:
      return state;
  }
};

export default counterReducer