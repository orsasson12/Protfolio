import { FC } from "react"
import { SocialDataType } from "./SocailData"
type PropsType = {
    item: SocialDataType
}
const SocialItem: FC<PropsType> = ({ item }) => {

    return (
        <li className={` socialListItem ${item.bg}`} >
            <a className="socialListItemLink"
                download={item.id === 'Resume'}
                href={item.link}
                target="_blank"
            >
                {item.name} <item.icon size={30} />
            </a>
        </li>
    )
}

export default SocialItem