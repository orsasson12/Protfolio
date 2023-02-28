import { FC } from 'react'
import { contactType } from '../ContactData'
type PropsType = {
    info: contactType
}
const ContactIcons: FC<PropsType> = ({ info }) => {
    return (
        <>
            <div className="flex items-center mb-4 md:last:pb-52">
                <i className="material-icons text-green-500 text-3xl mr-2 " >{<info.icon />}</i>
                <p className="text-gray-400 ">{info.info}</p>
            </div>
        </>
    )
}

export default ContactIcons