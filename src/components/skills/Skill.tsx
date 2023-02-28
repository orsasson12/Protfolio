import { FC } from 'react'
import { skillsDataType } from './skillsData'
type PropsType = {
    skill: skillsDataType
}
const Skill: FC<PropsType> = ({ skill }) => {
    return (

        <div className='cursor-pointer shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={skill.img} alt="HTML icon" />
            <p className='my-4'>{skill.name}</p>
        </div>

    )
}

export default Skill