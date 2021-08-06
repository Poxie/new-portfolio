import { useEffect, useState } from "react"
import { Tooltip } from "../../components/Tooltip"

interface Props {
    year: number;
    tooltip: string;
    hasLine: boolean;
    isAnimated: boolean;
}

export const TimelineDot: React.FC<Props> = ({ year, tooltip, hasLine, isAnimated }) => {
    return(
        <Tooltip className={`timeline-dot${isAnimated ? ' is-animated' : ''}`} tooltip={tooltip}>
            <span className={`timeline-year${hasLine ? ' has-line' : ''}`}>
                {year}
            </span>
        </Tooltip>
    )
}