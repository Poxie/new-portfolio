import { useEffect, useRef, useState } from "react"
import { Flex } from "../../components/Flex"
import { Technology } from "./Technology"
import technologiesJSON from './technologies.json';
const technologies = technologiesJSON.technologies;

export const Technologies = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if(!ref.current) return;
            const { top, height } = ref.current.getBoundingClientRect();
            if(top < height - 100) {
                setVisible(true);
                document.removeEventListener('scroll', handleScroll);
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <Flex className={`technologies${visible ? ' visible' : ''}`} justifyContent={'center'} alignItems={'flex-end'} ref={ref}>
            {technologies.map((technology, key) => {
                return(
                    <Technology 
                        addons={technology.addons}
                        description={technology.description}
                        language={technology.language}
                        icon={technology.icon}
                        isMain={technology.isMain}
                        amount={technologies.length}
                        index={key}
                        key={key}
                    />
                )
            })}
        </Flex>
    )
}