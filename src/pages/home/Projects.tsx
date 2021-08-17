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
                    const { title, description, image, link, github } = project;

                    return(
                        <Project 
                            title={title}
                            description={description}
                            image={image}
                            link={link}
                            animate={animate}
                            index={key}
                            reverted={key % 2 !== 0}
                            github={github}
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
                    link={'https://spot.poxen.dev'}
                    animate={animate}
                    index={projects.length}
                    github={'https://github.com/Poxie/spotify-app.git'}
                    reverted={false}
                />
            </div>
        </Flex>
    )
}