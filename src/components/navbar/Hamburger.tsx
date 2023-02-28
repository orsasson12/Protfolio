import { FC } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaTimes } from 'react-icons/fa'
type PropsType = {
    toggleHandler: () => void
    navIsToggle: boolean
}
const Hamburger: FC<PropsType> = ({ toggleHandler, navIsToggle }) => {
    return (
        <button onClick={toggleHandler}>
            {!navIsToggle ? <RxHamburgerMenu /> : <FaTimes />}
        </button>
    )
}

export default Hamburger