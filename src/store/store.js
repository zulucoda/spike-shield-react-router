import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import mainReducer from '../reducer/reducer';

export default createStore(mainReducer, {}, applyMiddleware(ReduxThunk));
