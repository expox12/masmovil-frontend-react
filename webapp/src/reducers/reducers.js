import { combineReducers } from "redux";
import { combineEpics } from 'redux-observable';
import phones from "./phones/reducer";
import { phonesEpic } from "./phones/epics";

const rootReducer = combineReducers({
    phones
});

const rootEpic = combineEpics(
    phonesEpic
);

export default { rootReducer, rootEpic };