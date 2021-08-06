import { useEffect, useRef, useState } from "react"
import { Flex } from "./Flex";
import './AnimatedText.scss';

interface Props {
    text: string;
    delay?: number;
    bold?: boolean;
}
export const AnimatedText: React.FC<Props> = ({ text, bold, delay=50 }) => {
    const [spans, setSpans] = useState(text.split('').map(letter => {return {letter, shouldAnimate: false}}));
    const [count, setCount] = useState(0);
    const interval = useRef<null | NodeJS.Timeout>(null);

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount(previous => previous + 1);
        }, delay)

        return () => {
            if(interval.current) {
                clearInterval(interval.current)
            }
        };
    }, []);

    useEffect(() => {
        if(!interval.current) return;
        if(count === text.length) {
            clearInterval(interval.current);
            interval.current = null;
            return;
        }
        setSpans(previous => {
            previous[count].shouldAnimate = true;
            return previous;
        })
    }, [count]);
    
    const visibleSpans = spans.filter(span => span.shouldAnimate);
    return(
        <Flex className="animated-text">
            {visibleSpans.map((span, key) => {
                return(
                    <div 
                        key={key} 
                        className={`animated-letter${span.letter === ' ' ? ' space' : ''}`}
                        style={{fontWeight: bold ? 'bold' : 500}}
                    >
                        {span.letter}
                    </div>
                )
            })}
        </Flex>
    )
}