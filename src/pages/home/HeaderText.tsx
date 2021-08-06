import { AnimatedParts } from "../../components/AnimatedParts"
import { Button } from "../../components/Button"
import { Fade } from "../../components/Fade"
import { Flex } from "../../components/Flex"

export const HeaderText = () => {
    const explore = () => {
        window.scrollTo({top: 600, behavior: 'smooth'})
    }

    return(
        <div className="header-text">
            <AnimatedParts 
                parts={['Hello,', `I'm Albin.`, 'A fullstack developer']}
                wordBreak={1}
                bold={true}
            />
            <Flex>
                <Fade delay={1700}>
                    <Button onClick={explore}>
                        Follow my journey
                    </Button>
                </Fade>
            </Flex>
        </div>
    )
}