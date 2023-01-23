import { createSlice } from '@reduxjs/toolkit';

type authState = {
    isAuth: boolean;
};

const initialState: authState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        updateAuth(state){
            state.isAuth = !state.isAuth;
        }
    }
});

export const { updateAuth } = authSlice.actions
export default authSlice.reducer