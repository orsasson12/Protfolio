import { FC } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-scroll'
type PropType = {
    button: string
}
const HeroButton: FC<PropType> = ({ button }) => {
    return (
        <div data-aos='fade-right' data-aos-duration='1800' data-aos-delay='500'>
            <Link to='Work' duration={500} smooth spy >
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    {button}
                    <span className='group-hover:rotate-90 duration-300'>
                        <AiOutlineArrowRight className='ml-3 ' />
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default HeroButton