// @modules/authorization/guards/AuthorizationGuard.tsx
import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

interface AuthorizationGuardProps {
    isAuthenticated: boolean;
    redirectTo?: string;
}

const AuthorizationGuard: React.FC<AuthorizationGuardProps> = ({isAuthenticated, redirectTo = '/'}) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace/>;
    }

    return <Outlet/>;
};

export default AuthorizationGuard;
