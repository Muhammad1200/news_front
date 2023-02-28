import { createSlice } from '@reduxjs/toolkit'


export const Auth = createSlice({
    name: 'auth',
    initialState : {
        token : '',
        user : null,
        isLogin : false,
    },
    reducers: {
        setAsLogin: (state, action) => {
            state.token = action?.payload?.token;
            state.user = action?.payload?.user;
            state.isLogin = true;
        },
        setUser: (state, action) => {
            state.user = action?.payload;
        },
        logout: (state, action) => {
            state.token = '';
            state.user = null;
            state.isLogin = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAsLogin, logout, setUser } = Auth.actions

export default Auth.reducer