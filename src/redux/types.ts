export interface User {
    id: number | string;
    email: string;
}

export interface AuthenticationState {
    user: User | null;
    isAuthenticated: boolean;
}
