import {PHONES_FETCH_ONE,
        PHONES_FETCH_ONE_SUCCESS,
        PHONES_FETCH_ONE_ERROR
}
from "./actionTypes";


export const fetchOnePhone = () => ({ type: PHONES_FETCH_ONE });
export const fetchOnePhoneFulFilled = () => ({ type: PHONES_FETCH_ONE_SUCCESS });
export const fetchOnePhoneError = () => ({ type: PHONES_FETCH_ONE_ERROR });
