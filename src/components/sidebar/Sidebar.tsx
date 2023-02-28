import { navData } from '../navbar/NavbarData'
import { FC } from 'react'
import { Link } from 'react-scroll'
type PropsType = {
    toggleHandler: () => void
    navIsToggle: boolean
}
const Sidebar: FC<PropsType> = ({ navIsToggle, toggleHandler }) => {
    return (
        <ul className={!navIsToggle ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center   '}>
            {navData.map(({ name, link }) => {
                return (
                    <li className='py-6 text-4xl' key={name}>  <Link to={link} onClick={toggleHandler} smooth duration={1000} spy offset={-100} >{name}</Link></li>
                )
            })}
        </ul>
    )
}



export default Sidebar