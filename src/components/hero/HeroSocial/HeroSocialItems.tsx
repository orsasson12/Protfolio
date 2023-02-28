import { FC } from 'react'
import { SocialDataType } from '../../socialIcons/SocailData'
type PropsType = {
    item: SocialDataType
}

const HeroSocialItems: FC<PropsType> = ({ item }) => {
    return (
        <li className={` p-1 mr-3 rounded-md ${item.bg}`} >
            <a className="socialListItemLink"
                download={item.id === 'Resume'}
                href={item.link}
                target="_blank"
            >
                <item.icon size={30} />
            </a>
        </li>
    )
}

export default HeroSocialItems