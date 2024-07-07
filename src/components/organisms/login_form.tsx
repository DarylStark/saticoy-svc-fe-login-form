import { Card } from 'antd'
import { Button, Input, Typography } from "antd";
import { FaRegUser, FaLock } from "react-icons/fa";
import './login_form.scss'
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

function LoginForm() {
    const { t } = useTranslation();
    return <>
        <Card className='card'>
            <form>
                <Title level={3}>{t('login_title')}</Title>
                <Paragraph>{t('tagline')}</Paragraph>
                <Input placeholder={t('username')} prefix={<FaRegUser />} size='large' />
                <Input.Password placeholder={t('password')} prefix={<FaLock />} size='large' />
                <Button type='primary'>{t('login')}</Button>
            </form>
        </Card>
    </>
}

export default LoginForm