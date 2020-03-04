import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from "redux-thunk";

import root from "../reducers/reducers";

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware, thunkMiddleware];

const middleware = applyMiddleware(...middlewares);

const Store = createStore(root.rootReducer, composeWithDevTools(middleware));

epicMiddleware.run(root.rootEpic);

export default Store