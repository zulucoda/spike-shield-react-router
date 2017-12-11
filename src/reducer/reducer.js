import { combineReducers } from 'redux';

import bottomNavigationReducer from '../components/bottom-navigation/BottomNavigation.reducer';
import loginReducer from '../components/login/Login.reducer';

export default combineReducers({
    bottomNavigationReducer,
    loginReducer
});
