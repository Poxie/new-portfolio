import { Flex } from "../../components/Flex"
import { Project } from "./Project"
import ProjectJSON from './Projects.json';
const projects = ProjectJSON.projects;

interface Props {
    animate: boolean;
}
export const Projects: React.FC<Props> = ({ animate }) => {
    return(
        <Flex className={`projects${animate ? ' animate' : ''}`} justifyContent={'space-between'}>
            {projects.map((project, key) => {
                const { title, description, image, link } = project;

                return(
                    <Project 
                        title={title}
                        description={description}
                        image={image}
                        link={link}
                        animate={animate}
                        index={key}
                        reverted={key % 2 !== 0}
                        key={key}
                    />
                )
            })}
        </Flex>
    )
}