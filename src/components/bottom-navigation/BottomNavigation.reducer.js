const initialState = {
    active: 'today',
    isHidden: false
};

const SET_NAVIGATION = 'SET_NAVIGATION';

export function setNavigation(payload) {
    return {
        type: SET_NAVIGATION,
        payload
    };
}

export default function bottomNavigationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAVIGATION: {
            return {
                active: action.payload.active
            };
        }
        default:
            return state;
    }
}
