import { FC } from 'react'
import Project from './Project'
import { ProjectDataTypes } from './ProjectData'
type PropsType = {
    projects: ProjectDataTypes[]
}
const ProjectList: FC<PropsType> = ({ projects }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 ' data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='800'>
            {projects.map((project) => (
                <Project project={project} />
            ))}
        </div>
    )
}

export default ProjectList