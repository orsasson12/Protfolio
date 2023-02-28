import { projectData } from './ProjectData'
import ProjectList from './ProjectList'
const Projects = () => {
    return (
        <div className='w-full md:h-screen text-gray-300 py-16  md:pl-16 bg-gradient-to-br from-[#0a192f] to-[#0a1f29] ' id='Work'>
            <div className='max-w-[1350px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='700'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                </div>
                <ProjectList projects={projectData} />
            </div>
        </div>
    )
}

export default Projects