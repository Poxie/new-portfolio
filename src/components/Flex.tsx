interface Props {
    children: any;
    className?: string;
    flexDirection?: 'column' | 'row';
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start';
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    flexWrap?: 'no-wrap' | 'wrap';
    style?: any;
}

export const Flex: React.FC<Props> = ({ children, className, flexDirection, flexWrap, justifyContent, alignItems, style: styling }) => {
    const style: any = {
        display: 'flex',
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        ...styling
    }
    className = className ? `${className} flex` : 'flex';

    return(
        <div style={style} className={className}>
            {children}
        </div>
    )
}