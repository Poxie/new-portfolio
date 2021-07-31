import './Button.scss';
import { Clickable } from './Clickable';

interface Props {
    children: any;
    type?: 'primary' | 'secondary' | 'transparent';
    style?: any;
    rounded?: boolean;
    onClick?: () => void;
}

export const Button: React.FC<Props> = ({ children, type='primary', style, rounded, onClick }) => {
    const className = `button ${type}${rounded ? ' rounded' : ''}`;
    return(
        <Clickable onClick={onClick} className={className} style={style}>
            <div className={`button-content`}>
                {children}
            </div>
        </Clickable>
    )
}