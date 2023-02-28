import { FC } from 'react'
import { contactType } from '../ContactData'
import ContactIcons from './ContactIcons'
type PropsType = {
    contactData: contactType[]
}
const ContactContent: FC<PropsType> = ({contactData}) => {
    return (
        <div className="p-6 flex flex-col justify-center md:pl-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in touch</h2>
            {contactData.map((info) => {
                return <ContactIcons info={info} />
            })}
        </div>
    )
}

export default ContactContent
          