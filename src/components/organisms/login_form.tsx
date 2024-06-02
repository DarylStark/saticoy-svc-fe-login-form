import { Card } from 'antd'
import { Button, Input, Typography } from "antd";
import { FaRegUser, FaLock } from "react-icons/fa";
import './login_form.scss'

const { Title, Paragraph } = Typography;

function LoginForm() {
    return <>
        <Card className='card'>
            <form>
                <Title level={3}>Welcome back!</Title>
                <Paragraph>Sign in to continue</Paragraph>
                <Input placeholder='Username' prefix={<FaRegUser />} size='large' />
                <Input.Password placeholder='Password' prefix={<FaLock />} size='large' />
                <Button type='primary'>Login</Button>
            </form>
        </Card>
    </>
}

export default LoginForm