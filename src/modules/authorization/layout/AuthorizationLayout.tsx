import React from 'react';
import {Avatar, Box, Container} from '@mui/material';
import {Outlet} from 'react-router-dom';

const AuthorizationLayout: React.FC = () => {
    return (
        <Container
            maxWidth="xs"
            sx={{
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            className="--auth-layout-container"
        >
            <Avatar
                src="/favicon.svg"
                alt="Logo"
                sx={{width: 96, height: 96, mb: 2}}
                variant="circular"
            />
            <Box sx={{width: '100%'}}>
                <Outlet/>
            </Box>
        </Container>
    );
};

export default AuthorizationLayout;
