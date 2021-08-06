import { TimelineMiddle } from "./TimelineMiddle"
import { TimelinePart } from "./TimelinePart"
import timelineConfig from './Timeline.json';
import { useEffect, useMemo, useRef, useState } from "react";
const timeline = timelineConfig.years;

interface Props {
    updateParent: (state: boolean) => void;
}
export const Timeline: React.FC<Props> = ({ updateParent }) => {
    const [times, setTimes] = useState(timeline.map(time => {return {time: time, hasLine: false, isAnimated: false}}));
    const currentVisibleTime = useRef(0);

    const updateVisibleTimes = useMemo(() => () => {
        const scroll = window.scrollY - window.innerHeight + 500;
        if(scroll >= currentVisibleTime.current * 255) {
            currentVisibleTime.current = currentVisibleTime.current + 1;
            setTimes(previous => {
                const newTimes = previous.map((time, key) => {
                    if(key === currentVisibleTime.current - 2) {
                        time.hasLine = true;
                    } else if(currentVisibleTime.current - 2 < 0) {
                        previous[currentVisibleTime.current - 1].isAnimated = true;
                    }
                    return time
                })
                return newTimes;
            })
            setTimeout(() => {
                setTimes(previous => {
                    const newTimes = previous.map((time, key) => {
                        for(let i = 0; i < currentVisibleTime.current - 1; i++) {
                            if(!previous[i]) continue;
                            previous[i].hasLine = true;
                            previous[i].isAnimated = true;
                        }
                        if(key === currentVisibleTime.current - 1) {
                            time.isAnimated = true;
                        }
                        return time
                    })
                    return newTimes;
                })
            }, 800);
        }
    }, [setTimes]);

    useEffect(() => {
        document.addEventListener('scroll', updateVisibleTimes);

        return () => document.removeEventListener('scroll', updateVisibleTimes);
    }, []);

    // Notifying parent that the last element is visible
    if(currentVisibleTime.current === times.length) {
        updateParent(true)
    };

    return(
        <div className="timeline">
            {times.map((time, key) => {
                const { year, title, description, date } = time.time;

                return(
                    <TimelinePart 
                        year={year}
                        title={title}
                        description={description}
                        date={date}
                        isAnimated={time.isAnimated}
                        isLeft={key % 2 !== 0}
                        isLast={key === times.length - 1}
                        key={key}
                    />
                )
            })}
            <TimelineMiddle 
                times={times}
            />
        </div>
    )
}