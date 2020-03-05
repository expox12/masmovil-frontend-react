import {PHONES_FETCH_ONE,
        PHONES_FETCH_ONE_SUCCESS,
        PHONES_FETCH_ONE_ERROR } from "./actionTypes";

const INITIALSTATE = {
  item: null,
  isLoading: false
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case PHONES_FETCH_ONE:
      return { ...state, isLoading: false }
    case PHONES_FETCH_ONE_SUCCESS:
      return { ...state, isLoading: false }
    case PHONES_FETCH_ONE_ERROR:
      return { ...state, isLoading: false }
    default: {
      return { ...state, isLoading: false }
    }
  }
};
