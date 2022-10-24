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

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice