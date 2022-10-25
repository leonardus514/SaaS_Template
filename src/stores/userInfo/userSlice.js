const initialState = {
    isLogin: false
};


export function userSlice(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGIN_SUCCESS':
            return {
                isLogin: true,
            };
        case 'SET_LOGIN_ERROR':
            return {
                isLogin: false,
            };
        default:
            return state;
    }
}

export default userSlice