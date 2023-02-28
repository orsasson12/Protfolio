import { FC } from 'react'
import Skill from './Skill'
import { skillsDataType } from './skillsData'
type PropsType = {
    skillsData: skillsDataType[]
}
const SkillsList: FC<PropsType> = ({ skillsData }) => {

    return (
        <>
            {skillsData.map((skill) => {
                return (
                    <Skill skill={skill} key={skill.name} />
                )
            })}
        </>
    )
}

export default SkillsList