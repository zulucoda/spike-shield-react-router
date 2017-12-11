const initialState = {
    isLoggedIn: false
};

const SET_LOGIN = 'SET_LOGIN';

export function setLoginState(payload) {
    return {
        type: SET_LOGIN,
        payload
    };
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                isLoggedIn: action.payload
            };
        }
        default:
            return state;
    }
}
