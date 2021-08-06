import './Fade.scss';

interface Props {
    children: any;
    className?: string;
    delay?: number;
}
export const Fade: React.FC<Props> = ({ children, className, delay=600 }) => {
    className = className ? `fade ${className}` : 'fade';
    return(
        <div className={className} style={{animationDelay: `${delay}ms`}}>
            {children}
        </div>
    )
}