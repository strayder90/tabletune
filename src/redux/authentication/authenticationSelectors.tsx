export const selectUser = (state: {
    authentication: {user: object | null;};
}) => state.authentication.user;

export const selectIsAuthenticated = (state: {
    authentication: {isAuthenticated: boolean;};
}) => state.authentication.isAuthenticated;