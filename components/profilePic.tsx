import Image from 'next/image'
import '../app/theme-config.css'

const ProfilePic = ({ image }: any) => {
  return (
    <div className="roundPinnedProfileImage">
      <Image src={image} alt="Profile image" className="profileImage" />
    </div>
  )
}

export default ProfilePic
