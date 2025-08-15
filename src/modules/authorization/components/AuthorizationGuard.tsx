import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

import AuthorizationGuardProps from '@modules/authorization/types.ts';

const AuthorizationGuard = ({isAuthenticated, redirectTo = '/'}: AuthorizationGuardProps) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace/>;
    }

    return <Outlet/>;
};

export default AuthorizationGuard;
