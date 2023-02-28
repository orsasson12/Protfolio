import HeroButton from './HeroButton'
import { HeroData } from './HeroData'
import HeroSocialIcons from './HeroSocial/HeroSocialIcons'
const HeroSection = () => {

    return (
        <div className='w-full h-screen bg-gradient-to-br from-[#0a192f] to-[#0a1f29] ' id='Hero'>
            <div className='max-w-[1000px] mx-auto pr-8 pl-16 flex flex-col justify-center h-full'>
                <p className='text-pink-600' data-aos='fade-down' data-aos-duration='1500' >{HeroData.greet}</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
                    data-aos='fade-down' data-aos-duration='1600'
                >
                    {HeroData.title}
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' data-aos='fade-up' data-aos-duration='1700'>
                    {HeroData.role}
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]' data-aos='fade-right' data-aos-duration='1000'>
                    {HeroData.desc}
                </p>
                <HeroSocialIcons />
                <HeroButton button={HeroData.button} />
            </div>
        </div>
    )
}

export default HeroSection