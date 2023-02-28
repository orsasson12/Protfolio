import { AboutData } from "./AboutData"

const AboutSection = () => {
    return (
        <div className='w-full h-screen bg-[#0a1f29] flex place-content-center' id='About'>
            <div className='grid lg:grid-cols-2 place-items-center '>
                <div className='px-4 md:pl-16'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] ' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='600'>{AboutData.title}</h2>
                    <p className='text-[#8892b0] py-4 max-w-[700px]' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
                        {AboutData.desc}
                    </p>
                </div>
                <div className='aboutSectionImage ' data-aos='zoom-in-left' data-aos-duration='1000' data-aos-delay='800'>

                </div>
            </div>
        </div>
    )
}

export default AboutSection