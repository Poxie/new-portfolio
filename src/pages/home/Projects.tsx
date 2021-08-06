import { Flex } from "../../components/Flex"
import { Project } from "./Project"

interface Props {
    animate: boolean;
}
export const Projects: React.FC<Props> = ({ animate }) => {
    return(
        <Flex className={`projects${animate ? ' animate' : ''}`} justifyContent={'space-between'}>
            <Project 
                title={'Meetings'}
                description={'Next generation meetings'}
                link={'https://musing-babbage-cfc5eb.netlify.app/'}
                animate={animate}
                index={0}
                image={'https://i.poxgur.com/EVGUyP.png'}
            />
            <Project 
                title={'Graphing'}
                description={'Statistics don\'t have to be difficult'}
                reverted={true}
                link={'https://google.com'}
                animate={animate}
                index={1}
                image={'https://i.poxgur.com/dVgteZ.png'}
            />
        </Flex>
    )
}