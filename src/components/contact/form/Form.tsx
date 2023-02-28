import { FC } from 'react'
import { formType } from '../ContactData'
import FormInputs from './FormInputs'
type PropsType = {
    formData: formType[]
}
import { clearForm } from '../../../store/formSlice'
import { useSelector } from 'react-redux'
import { FormState } from '../../../store/formSlice'
import { useDispatch } from 'react-redux'
const Form: FC<PropsType> = ({ formData }) => {
    let { error, name, email } = useSelector((state: FormState) => state.form)
    const dispatch = useDispatch()
    const formIsValid = Object.values(error).find((error) => (error as { isError: boolean }).isError) as { isError: boolean } | undefined || name && email === '';
    const submitForm = (e: any) => {
        e.preventDefault();
        dispatch(clearForm())
    };


    return (
        <div className="p-6">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <form onSubmit={submitForm}>
                {formData?.map((input) => {
                    return <FormInputs key={input.id} input={input} />
                })}
                <button disabled={formIsValid?.isError} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-500 disabled:cursor-not-allowed" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Form

