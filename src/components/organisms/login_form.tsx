import { Button, Input } from "antd";
import { FaRegUser, FaLock } from "react-icons/fa";
import './login_form.scss'

function LoginForm() {
    return <>
        <div>
            <form>
                <h1>Saticoy</h1>
                <Input placeholder='Username' prefix={<FaRegUser />} size='large' />
                <Input.Password placeholder='Password' prefix={<FaLock />} size='large' />
                <Button type='primary'>Login</Button>
            </form>
        </div>
    </>
}

export default LoginForm