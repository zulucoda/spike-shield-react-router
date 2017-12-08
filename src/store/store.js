import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import mainReducer from '../reducer/reducer';

export const store = createStore(mainReducer, {}, applyMiddleware(ReduxThunk));