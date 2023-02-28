import Sidebar from '../sidebar/Sidebar'
import Hamburger from './Hamburger'
import NavbarList from './NavbarList'
import { UiActions } from '../../store/uiReducer'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { UiSliceType } from '../../store/uiReducer'
import SocialIcons from '../socialIcons/SocialIcons'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = () => {
  const navIsToggle = useSelector((state: UiSliceType) => state.ui.toggleButton)
  const dispatch = useDispatch()
  const toggleHandler = () => {
    dispatch(UiActions.toggleNavButton())
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div onClick={() => scroll.scrollToTop()} className='cursor-pointer font-semibold'>
        UOS
      </div>
      <NavbarList />
      <div className='md:hidden z-10 relative right-9 '>
        <Hamburger toggleHandler={toggleHandler} navIsToggle={navIsToggle} />
      </div>
      <Sidebar navIsToggle={navIsToggle} toggleHandler={toggleHandler} />
      <SocialIcons />
    </div>
  )
}

export default Navbar