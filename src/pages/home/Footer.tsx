import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "../../components/AnimatedText"
import { Button } from "../../components/Button";
import { Fade } from "../../components/Fade";
import { Flex } from "../../components/Flex";
import { WaitFor } from "../../components/WaitFor";

export const Footer = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if(!ref.current) return;
            const { top, height } = ref.current.getBoundingClientRect();
            console.log(top, height);
            if(top - 450 < height) {
                setVisible(true);
                document.removeEventListener('scroll', handleScroll);
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
        <Flex className={`footer${visible ? ' visible' : ''}`} ref={ref} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <span className="footer-overlay"/>
            {visible && (
                <WaitFor delay={800}>
                    <AnimatedText 
                        text={'Well, are you ready?'}
                        bold={true}
                    />
                    <Fade delay={1200}>
                        <Button rounded={true}>
                            Let's do this
                        </Button>
                    </Fade>
                </WaitFor>
            )}
        </Flex>
    )
}