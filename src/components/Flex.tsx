import { forwardRef } from "react";

interface Props {
    children: any;
    className?: string;
    flexDirection?: 'column' | 'row';
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start';
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    flexWrap?: 'no-wrap' | 'wrap';
    style?: any;
    ref?: any;
}

export const Flex: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ children, className, flexDirection, flexWrap, justifyContent, alignItems, style: styling }, ref) => {
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
        <div style={style} className={className} ref={ref}>
            {children}
        </div>
    )
})