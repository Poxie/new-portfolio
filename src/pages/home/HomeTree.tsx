import { useState } from "react"
import { Projects } from "./Projects"
import { Timeline } from "./Timeline"

export const HomeTree = () => {
    const [animateProjects, setAnimateProjects] = useState(false);

    return(
        <div className="home-tree">
            <Timeline 
                updateParent={setAnimateProjects}
            />
            <Projects 
                animate={animateProjects}
            />
        </div>
    )
}