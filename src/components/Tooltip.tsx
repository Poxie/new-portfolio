interface Props {
    tooltip: string;
    children: any;
    className?: string;
    direction?: 'up' | 'right' | 'left' | 'down';
    style?: any;
}

export const Tooltip: React.FC<Props> = ({ tooltip, children, className, direction="up", style }) => {
    return(
        <div data-tooltip={tooltip} data-tooltip-direction={direction} className={className} style={style}>
            {children}
        </div>
    )
}