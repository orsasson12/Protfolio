import React from 'react'
import SocialData from '../../socialIcons/SocailData'
import HeroSocialItems from './HeroSocialItems'
const HeroSocialIcons = () => {
    return (
        <div className='flex p-1  lg:hidden' data-aos='fade-right' data-aos-duration='1900' data-aos-delay='800'>
            {SocialData.map((item) => (
                <ul key={item.name}>
                    <HeroSocialItems item={item} />
                </ul>
            ))}
        </div>
    )
}

export default HeroSocialIcons