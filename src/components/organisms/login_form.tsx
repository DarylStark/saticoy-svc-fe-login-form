import './login_form.scss'
import LoginIcon from '@mui/icons-material/Login';

import Button from '@mui/material/Button';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

import { useEffect, useRef } from 'react';

import Paper from '@mui/material/Paper';

function LoginForm() {
    const username_ref = useRef();
    useEffect(() => {
        if (username_ref.current)
            username_ref.current.focus();
    });

    return <>
        <Paper variant='outlined' square={true}>
            <form>
                <h1>Saticoy</h1>
                <TextField
                    inputRef={username_ref}
                    id="username"
                    label='Username'
                    variant='outlined'
                    autoComplete='off'
                    placeholder='Username'
                    className='w-full'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    id="password"
                    label='Password'
                    variant='outlined'
                    type='password'
                    autoComplete='off'
                    placeholder='Password'
                    className='w-full'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <KeyIcon />
                            </InputAdornment>
                        ),
                    }}
                />


                <Button color='primary' variant='contained' startIcon={<LoginIcon />} size='large'>Log in</Button>
            </form>
        </Paper>
    </>
}

export default LoginForm