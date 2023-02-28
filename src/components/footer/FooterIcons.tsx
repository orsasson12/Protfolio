import React from 'react'
import SocialData from '../socialIcons/SocailData'
import FooterIcon from './FooterIcon'
const FooterIcons = () => {
    return (
        <div className="text-2xl flex gap-4 md:hidden">
          {SocialData.map((icon) =>{
            return <FooterIcon icon={icon}/>
          })}
        </div>
    )
}

export default FooterIcons