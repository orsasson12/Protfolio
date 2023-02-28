import SkillsList from "./SkillsList"
import skillsData from "./skillsData"
const Skills = () => {

    return (
        <div className='w-full h-screen bg-gradient-to-br from-[#0a1f29] to-[#0a192f] text-gray-300' id='Skills'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pl-20'>
                <div data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='800'>
                    <SkillsList skillsData={skillsData} />
                </div>
            </div>
        </div>
    )
}

export default Skills