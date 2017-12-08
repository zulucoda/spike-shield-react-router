
const initialState = {
    active: 'today',
    isHidden: false
};

const SET_NAVIGATION = 'SET_NAVIGATION';

export const setNavigation = payload => ({
   type: SET_NAVIGATION,
   payload
});

const bottomNavigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAVIGATION: {
            return {
                active: action.payload.active
            }
        }
        default:
            return state;
    }
};

export default bottomNavigationReducer;