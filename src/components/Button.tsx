import './Button.scss'
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    children: ReactNode;
    icon?: IconType;
}

function Button({ children, icon: Icon }: ButtonProps) {
    return (
        <button className='button'>
            {Icon && <div className='icon'><Icon /></div>}
            <div className='text'>{children}</div>
        </button>
    );
}

export default Button;