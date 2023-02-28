import { FC } from 'react'
import { ProjectDataTypes } from './ProjectData'

type PropsType = {
    project: ProjectDataTypes
}

const Project: FC<PropsType> = ({ project }) => {

    return (
        <div
            key={project.projectName}
            style={{ backgroundImage: `url(${project.img})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center  mx-auto content-div md:last:col-start-2 md:last:col-end-[-1] last:col-span-full		"
            data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay={project.delay}
        >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-2xl font-bold text-black tracking-wider ">
                    {project.projectName}
                </span>
                <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={project.codeLink} target="_blank">
                        <button
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 duration-300"
                        >
                            {project.buttonCodeLink}
                        </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={project.demoLink} target="_blank">
                        <button
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 duration-300"
                        >
                            {project.buttonDemoLink}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project