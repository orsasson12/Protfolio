import { FC } from 'react'
import { formType } from '../ContactData'
import Input from './Input'
type PropTypes = {
    input: formType
}
const FormInputs: FC<PropTypes> = ({ input }) => {
    return (
        <div className='mb-4'>
            <Input input={input}/>
        </div>
    )
}

export default FormInputs