import React from 'react';
import {Typography, Box} from '@mui/material';

const Dashboard: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Welcome to the Dashboard
            </Typography>
            <Typography>
                This page is protected and requires authentication.
            </Typography>
        </Box>
    );
};

export default Dashboard;
