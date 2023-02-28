import SocialData from "./SocailData"
import SocialItem from "./SocialItem"

const SocialIcons = () => {
    return (
        <div className='hidden lg:socialContainerMd'>
            {SocialData.map((item) => (
                <ul key={item.name}>
                    <SocialItem item={item} />
                </ul>
            ))}
        </div>
    )
}

export default SocialIcons