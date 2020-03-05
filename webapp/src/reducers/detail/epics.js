import { from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as Api from "../../services/api";
import * as Actions from "./actions"
import { ofType } from 'redux-observable';
import { PHONES_FETCH_ONE } from './actionTypes';

export const phonesEpic = action$ => action$.pipe(
    ofType(PHONES_FETCH_ONE),
    mergeMap(action => from(Api.retrieveSinglePhone(action))),
    map(body => Actions.fetchPhonesFulfilled(body.data)),
    catchError(err => {
        Actions.fetchPhonesError();
        console.error(err);
    })
)
