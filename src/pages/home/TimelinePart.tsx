import { Flex } from "../../components/Flex"
import { TimelineDot } from "./TimelineDot"

interface Props {
    title: string;
    description: string;
    year: number;
    date: string;
    isAnimated: boolean;
    isLeft?: boolean;
    isLast?: boolean;
    isMobile?: boolean;
}

export const TimelinePart: React.FC<Props> = ({ title, description, year, date, isLeft, isAnimated, isLast, isMobile }) => {
    let justifyContent : 'flex-start' | 'flex-end' | 'center';
    if(isLeft && !isLast) {
        justifyContent = 'flex-start';
    } else if(!isLeft && !isLast) {
        justifyContent = 'flex-end';
    } else {
        justifyContent = 'center';
    }
    return(
        <Flex className={`timeline-part${isAnimated ? ' is-animated' : ''}${isLeft ? ' is-left' : ''}${isLast ? ' is-last' : ''}${isMobile ? ' is-mobile' : ''}`} justifyContent={justifyContent}>
            <div className="timeline-part-container">
                <div className="timeline-part-text">
                    <h3>
                        {title}
                    </h3>
                    <span>
                        {description}
                    </span>
                    <div className="date">
                        {date}
                    </div>
                </div>
            </div>
        </Flex>
    )
}