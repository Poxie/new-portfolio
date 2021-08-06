import { useEffect, useMemo, useRef, useState } from "react"
import { TimelineDot } from "./TimelineDot"

interface Time {
    time: {
        year: number;
        title: string;
        date: string;
        description: string;
    };
    hasLine: boolean;
    isAnimated: boolean;
}
interface Props {
    times: Time[];
}
export const TimelineMiddle: React.FC<Props> = ({ times }) => {
    return(
        <div className="timeline-middle">
            {times.map((time, key) => {
                return(
                    <TimelineDot 
                        tooltip={`${time.time.date}`}
                        year={time.time.year}
                        hasLine={time.hasLine}
                        isAnimated={time.isAnimated}
                        key={key}
                    />
                )
            })}
        </div>
    )
}