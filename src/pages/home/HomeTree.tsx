import { useEffect, useRef, useState } from "react"
import { MobileTree } from "./MobileTree";
import { Projects } from "./Projects"
import { Timeline } from "./Timeline"

export const HomeTree = () => {
    const [animateProjects, setAnimateProjects] = useState(false);
    const [isWrapped, setIsWrapped] = useState(false);
    const currentlyWrapped = useRef(false);

    useEffect(() => {
        const checkForScreenSize = () => {
            const size = document.body.offsetWidth;
            if(size < 700) {
                if(!currentlyWrapped.current) {
                    currentlyWrapped.current = true;
                    setIsWrapped(true);
                }
            } else {
                if(currentlyWrapped.current) {
                    currentlyWrapped.current = false;
                    setIsWrapped(false);
                }
            }
        }
        checkForScreenSize();
        window.addEventListener('resize', checkForScreenSize);

        return () => window.removeEventListener('resize', checkForScreenSize);
    }, []);

    return(
        <div className="home-tree">
            {!isWrapped ? (
                <>
                <Timeline 
                    updateParent={setAnimateProjects}
                />
                <Projects 
                    animate={animateProjects}
                />
                </>
            ) : (
                <MobileTree />
            )}
        </div>
    )
}