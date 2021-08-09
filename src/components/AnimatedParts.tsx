import React, { useEffect, useRef, useState } from "react"
import './AnimatedParts.scss';
import { Flex } from "./Flex";

interface Props {
    parts: string[];
    delay?: number;
    bold?: boolean;
    wordBreak?: number;
    justifyCenter?: boolean;
}

export const AnimatedParts: React.FC<Props> = ({ parts, bold, wordBreak, justifyCenter, delay=500 }) => {
    const [spans, setSpans] = useState(parts.map(part => {return {content: part, shouldAnimated: false}}));
    const [count, setCount] = useState(0);
    const interval = useRef<null | NodeJS.Timeout>(null);

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount(previous => previous + 1);
        }, delay);
    }, []);
    useEffect(() => {
        if(!interval.current) return;
        if(count === parts.length) {
            clearInterval(interval.current);
            interval.current = null
            return;
        }

        setSpans(previous => {
            previous[count].shouldAnimated = true;
            return previous;
        })
    }, [count]);
    
    const style = {
        fontWeight: bold ? 'bold' : 400
    }
    return(
        <Flex className="animated-parts" style={style} flexWrap={'wrap'} justifyContent={justifyCenter ? 'center' : undefined}>
            {spans.map((part, key) => {
                return(
                    <React.Fragment key={key}>
                        <div className={`animated-part${part.shouldAnimated ? ' animate' : ''}`}>
                            {part.content}
                        </div>
                        {wordBreak === key && (
                            <span className="break" style={{display: 'block', width: '100%'}}></span>
                        )}
                    </React.Fragment>
                )
            })}
        </Flex>
    )
}