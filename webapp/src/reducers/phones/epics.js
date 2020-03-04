import { PHONES_FETCH } from "./actionTypes";
import { from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as Api from "../../services/api";
import * as Actions from "./actions"
import { ofType } from 'redux-observable';

export const phonesEpic = action$ => action$.pipe(
    ofType(PHONES_FETCH),
    mergeMap(action => from(Api.retrievePhones())),
    map(body => Actions.fetchPhonesFulfilled(body.data)),
    catchError(err => {
        Actions.fetchPhonesError();
        console.error(err);
    })
)
