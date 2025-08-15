import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';

const LoginPage: React.FC = () => {
    const [email, setEmail]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');
    const [password, setPassword]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // console.log('Logging in with', {email, password});
    };

    return (
        <>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    label='Email Address'
                    margin='normal'
                    required
                    fullWidth
                    type='email'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    autoComplete='email'
                    autoFocus
                />
                <TextField
                    label='Password'
                    margin='normal'
                    required
                    fullWidth
                    type='password'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    autoComplete='current-password'
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    sx={{mt: 3, mb: 2}}
                >
                    Log In
                </Button>
            </Box>
        </>
    );
};

export default LoginPage;
