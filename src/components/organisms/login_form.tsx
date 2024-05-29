import './login_form.scss'
import { FaUser } from 'react-icons/fa';

import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';


function LoginForm() {
    return <>
        <Paper>
            <h1>Saticoy</h1>
            <CardContent>
                <form>
                    <div className='field'>
                        <label htmlFor='username'>Username
                            <input id='username' type='text' />
                        </label>
                    </div>
                    <div className='field'>
                        <label htmlFor='password'>Password
                            <input id='password' type='password' />
                        </label>
                    </div>
                    <div className='button_bar'>
                        <Button color='primary' variant='contained' startIcon={<FaUser />} size='large'>Log in</Button>
                    </div>
                </form>
            </CardContent>
        </Paper>
    </>
}

export default LoginForm