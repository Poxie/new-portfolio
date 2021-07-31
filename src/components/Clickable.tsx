interface Props {
    children: any;
    className?: string;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    style?: any;
}

export const Clickable: React.FC<Props> = ({ children, className, id, onClick, style }) => {
    className = className ? `${className} clickable` : 'clickable';
    return(
        <div className={className} style={{cursor: 'pointer', ...style}} onClick={onClick} id={id}>
            {children}
        </div>
    )
}