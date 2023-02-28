import { Link } from 'react-scroll'
import { navData } from './NavbarData'
const NavbarList = () => {
    return (
        <ul className='hidden md:flex '>
            {navData.map(({ name, link }) => {
                return (
                    <li key={name}>
                        <Link to={link} smooth duration={500} spy   >{name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarList