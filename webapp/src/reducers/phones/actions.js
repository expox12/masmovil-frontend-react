import { PHONES_PAGE, 
        PHONES_FETCH, 
        PHONES_FETCH_SUCCESS,
        PHONES_FETCH_ERROR
}
from "./actionTypes";

export const fetchPhones = () => ({ type: PHONES_FETCH });
export const fetchPhonesFulfilled = payload => ({ type: PHONES_FETCH_SUCCESS, payload });
export const fetchPhonesError = () => ({ type: PHONES_FETCH_ERROR });

export const changePage = page => ({ type: PHONES_PAGE, payload: page });
