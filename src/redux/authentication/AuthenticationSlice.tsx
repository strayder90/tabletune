import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

interface User {
    id: number | string;
    email: string;
}

interface AuthenticationState {
    user: User | null;
    isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
    user: null,
    isAuthenticated: false,
};

const AuthenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login(
            state,
            action: PayloadAction<{user: User; isAuthenticated: boolean}>
        ) {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        logout(
            state,
            action: PayloadAction<{user: null; isAuthenticated: boolean}>
        ) {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        clearAuth: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const {login, logout, clearAuth} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
