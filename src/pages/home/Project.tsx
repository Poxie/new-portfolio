import { Button } from "../../components/Button"
import { Fade } from "../../components/Fade"
import { Flex } from "../../components/Flex"

interface Props {
    title: string;
    description: string;
    link: string;
    animate: boolean;
    index: number;
    image: string;
    reverted?: boolean;
}

export const Project: React.FC<Props> = ({ title, description, link, animate, index, reverted, image }) => {
    const extraDelay = index * .450;
    const extraDelayMS = index * .450 * 1000;
    return(
        <Flex className="project" flexDirection={'column'}>
            <span className={`project-branch${reverted ? ' reverted' : ''}`}/>
            <Flex className="project-container" alignItems={'flex-end'}>
                <span className="overlay" style={{animationDelay: `${4.2 + extraDelay}s`}} />
                {animate && (
                    <Flex className="project-text" flexDirection={'column'} alignItems={'flex-start'}>
                        <Fade className={'project-title'} delay={5000 + extraDelayMS}>
                            {title}
                        </Fade>
                        <Fade className="project-description" delay={5300 + extraDelayMS}>
                            {description}
                        </Fade>
                        <Fade delay={5500 + extraDelayMS}>
                            <Button onClick={() => window.open(link)}>
                                Try it out
                            </Button>
                        </Fade>
                    </Flex>
                )}
                <Flex className="project-image" justifyContent={'center'}>
                    <img src={image} alt="" />
                </Flex>
            </Flex>
        </Flex>
    )
}