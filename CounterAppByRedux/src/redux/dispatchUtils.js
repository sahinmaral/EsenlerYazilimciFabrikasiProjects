import { bindActionCreators } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";

const increment = () => ({ type: actionTypes.INCREASE_COUNTER });
const decrement = () => ({ type: actionTypes.DECREASE_COUNTER });
const reset = () => ({ type: actionTypes.RESET_COUNTER });

export default function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ increment, decrement, reset }, dispatch),
  };
}
