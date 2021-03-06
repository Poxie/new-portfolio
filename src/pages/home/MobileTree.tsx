import { MobileBranch } from './MobileBranch';
import TimelineJSON from './Timeline.json';
import ProjectJSON from './Projects.json';
import { Project } from './Project';
const timeline = TimelineJSON.years;
const projects = ProjectJSON.projects;

export const MobileTree = () => {
    return(
        <div className="mobile-tree">
            {timeline.map((time, key) => {
                const { date, title, description, year } = time;
                return(
                    <MobileBranch 
                        date={date}
                        description={description}
                        title={title}
                        year={year}
                        key={key}
                    />
                )
            })}
            {projects.map((project, key) => {
                const { title, description, image, link, github } = project;
                return(
                    <Project 
                        animate={true}
                        description={description}
                        image={image}
                        link={link}
                        title={title}
                        github={github}
                        index={key}
                        key={key}
                    />
                )   
            })}
            <div className={`special-project animate`}>
                <Project 
                    title={'Spotify'}
                    description={'Spotify API for everyone'}
                    image={'https://i.poxgur.com/bhcy5v.png'}
                    link={'https://spot.poxen.dev'}
                    animate={true}
                    github={'https://github.com/Poxie/spotify-app.git'}
                    index={projects.length}
                    reverted={false}
                />
            </div>
        </div>
    )
}