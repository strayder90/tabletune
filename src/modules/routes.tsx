import React from 'react';
import type {RouteObject} from 'react-router-dom';
import AuthorizationLayout from '@modules/authorization/layout/AuthorizationLayout';
import LoginPage from '@modules/authorization/pages/Login';
import Dashboard from '@modules/dashboard/pages/Dashboard';
import AuthorizationGuard from '@modules/authorization/components/AuthorizationGuard.tsx';

// temporary auth check (replace with real one)
const isAuthenticated = Boolean(localStorage.getItem('token'));

export const RoutesConfig: RouteObject[] = [
    {
        path: '/',
        element: <AuthorizationLayout/>,
        children: [
            {
                index: true,
                element: <LoginPage/>
            }
        ]
    },
    {
        element: <AuthorizationGuard isAuthenticated={isAuthenticated} redirectTo='/'/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    }
];
