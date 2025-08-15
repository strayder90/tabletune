import {createSlice, type PayloadAction, type Slice} from '@reduxjs/toolkit';

import {AuthenticationState, User} from '@redux/types.ts';

const initialState: AuthenticationState = {
    user: null,
    isAuthenticated: false,
};

const AuthenticationSlice: Slice<AuthenticationState> = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login(
            state: AuthenticationState,
            action: PayloadAction<{user: User; isAuthenticated: boolean}>
        ): void {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        logout(
            state: AuthenticationState,
            action: PayloadAction<{user: null; isAuthenticated: boolean}>
        ): void {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        clearAuth(state: AuthenticationState): void {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const login: typeof AuthenticationSlice.actions.login = AuthenticationSlice.actions.login;
export const logout: typeof AuthenticationSlice.actions.logout = AuthenticationSlice.actions.logout;
export const clearAuth: typeof AuthenticationSlice.actions.clearAuth = AuthenticationSlice.actions.clearAuth;

export default AuthenticationSlice.reducer;
