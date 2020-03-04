import { PHONES_PAGE, PHONES_FETCH, PHONES_FETCH_SUCCESS, PHONES_FETCH_ERROR, PHONES_SELECT_ITEM } from "./actionTypes";

const INITIALSTATE = {
  items: [],
  page: 1,
  isLoading: false,
  itemSelected: null
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case PHONES_PAGE:
      return { ...state, page: action.payload }
    case PHONES_FETCH:
      return { ...state, isLoading: true }
    case PHONES_FETCH_SUCCESS:
      return { ...state, items: action.payload, isLoading: false }
    case PHONES_FETCH_ERROR:
      return { ...state, isLoading: false }
    case PHONES_SELECT_ITEM:
      return { ...state, itemSelected: action.payload }
    default: {
      return { ...state, isLoading: false }
    }
  }
};
