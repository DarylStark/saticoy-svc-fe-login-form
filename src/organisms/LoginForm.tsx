import './LoginForm.scss'
import Button from '../atoms/Button'

import { FaUser } from 'react-icons/fa';


function LoginForm() {
    return <>
        <div className='loginform'>
            <h1>Saticoy</h1>
            <div className='field'>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' />
            </div>
            <div className='field'>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' />
            </div>
            <div className='button_bar'>
                <Button icon={FaUser}>Log in</Button>
            </div>
        </div>
    </>
}

export default LoginForm