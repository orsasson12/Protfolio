import { FC } from 'react'
import { Link } from 'react-router-dom'
import { SocialDataType } from '../socialIcons/SocailData'

type PropsType = {
    icon: SocialDataType
}
const FooterIcon: FC<PropsType> = ({ icon }) => {
    return (
        <>
            <li className={`list-none p-2 rounded-full  ${icon.bg}`} >
                <a
                    download={icon.id === 'Resume'}
                    href={icon.link}
                    target="_blank"
                >
                    <icon.icon size={30} />
                </a>
            </li>
        </>
    )
}

export default FooterIcon