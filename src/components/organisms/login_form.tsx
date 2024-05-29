import './login_form.scss'
import LoginIcon from '@mui/icons-material/Login';

import Button from '@mui/material/Button';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

function LoginForm() {
    return <>
        <form>
            <h1>Saticoy</h1>
            <TextField
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
        </form >
    </>
}

export default LoginForm