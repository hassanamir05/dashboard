const ProfilePic = (props) => {

    return <img src={props.src} className="h-[35px] ml-2 hover:cursor-pointer hidden md:flex lg:flex" alt="Profile Picture" />
}

export default ProfilePic;