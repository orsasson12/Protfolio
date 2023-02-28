import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import ContactContent from './Content/ContactContent'
import Form from './form/Form'
import { contactData, form } from './ContactData'
import Footer from '../footer/Footer'
const Contact = () => {
    return (
        <>
            <div className="md:h-screen   bg-gradient-to-br from-[#0a1f29] to-[#0a192f] " id='Contact'>
                <div className="max-w-7xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[repeat(2,50%)] gap-3">
                    <ContactContent contactData={contactData} />
                    <Form formData={form} />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact