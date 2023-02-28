import { FC } from 'react'
import formSlice from '../../../store/formSlice'
import { setName, setEmail, setMessage,  setError, clearForm } from '../../../store/formSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FormState } from '../../../store/formSlice'
import { formType } from '../ContactData'
type PropTypes = {
    input: formType
}
const Input: FC<PropTypes> = ({ input }) => {
    const dispatch = useDispatch()
    const { name, email, message, error } = useSelector((state: FormState) => state.form)
    function ValidateEmail(mail: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            dispatch(setError({ field: 'email', isError: false, error: undefined }));
            return true;
        }
        dispatch(setError({ field: 'email', isError: true, error: 'Invalid email' }));
        return false;
    }

    const inputHandler = (e: any) => {
        const { value } = e.target
        e.preventDefault();
        if (input.id !== 'message') {
            if (input.id === 'name') {
                if (value.length <= 2) {
                    dispatch(setError({ field: 'name', isError: true, error: 'Invalid name' }));
                } else {
                    dispatch(setError({ field: 'name', isError: false, error: undefined }));
                }
                dispatch(setName(value));
            }
            else {
                dispatch(setEmail(value));
                ValidateEmail(value);
            }
        }
        else {
            dispatch(setMessage(value));
        }
    }



    return (
        <>
            {
                input.id !== 'message' ? (
                    <>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="name">{input.label}</label>
                        <input onChange={(e) => inputHandler(e)} value={input.id === 'name' ? name : email} className="appearance-none bg-transparent border-b-2 border-gray-100 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-gray-300 transition-all duration-300" id={input.id} type="text" placeholder={input.placeHolder} />
                        {error[input.id]?.isError && <span className='text-red-600'> X {error[input.id]?.error} </span>}
                    </>
                ) : (
                    <>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="message">{input.label}</label>
                        <textarea onChange={(e) => inputHandler(e)} value={message} className="appearance-none 
                        bg-transparent border-b-2 border-gray-100 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:border-gray-300 transition-all duration-300" id={input.id}
                            placeholder={input.placeHolder}></textarea>
                    </>
                )
            }
        </>
    )
}
export default Input