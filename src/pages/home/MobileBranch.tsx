import { Flex } from "../../components/Flex"
import { TimelineDot } from "./TimelineDot"
import { TimelinePart } from "./TimelinePart"

interface Props {
    date: string;
    year: number;
    title: string;
    description: string;
}

export const MobileBranch: React.FC<Props> = ({ date, year, title, description }) => {
    return(
        <Flex className="mobile-branch" flexDirection={'column'} alignItems={'center'}>
            <TimelineDot 
                hasLine={true}
                isAnimated={true}
                tooltip={date}
                year={year}
            />
            <TimelinePart 
                date={date}
                title={title}
                description={description}
                year={year}
                isAnimated={true}
                isMobile={true}
            />
        </Flex>
    )
}