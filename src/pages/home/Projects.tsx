import { Flex } from "../../components/Flex"
import { Project } from "./Project"
import ProjectJSON from './Projects.json';
const projects = ProjectJSON.projects;

interface Props {
    animate: boolean;
}
export const Projects: React.FC<Props> = ({ animate }) => {
    return(
        <Flex className={`projects${animate ? ' animate' : ''}`} flexDirection={'column'} alignItems={'center'}>
            <Flex justifyContent={'space-between'} style={{width: '100%'}}>
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
            <div className={`special-project${animate ? ' animate' : ''}`}>
                <Project 
                    title={'Spotify'}
                    description={'Spotify API for everyone'}
                    image={'https://i.poxgur.com/bhcy5v.png'}
                    link={'https://spotify.poxen.dev'}
                    animate={animate}
                    index={projects.length}
                    reverted={false}
                />
            </div>
        </Flex>
    )
}