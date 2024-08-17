import Input from './input';

const ProfileForm = () => {
    return <div className="flex md:flex-row flex-col bg-white rounded-[15px] gap-x-10 px-10 py-5 items-center md:items-start">
        <div className="">
            <img src="/src/assets/Images/dummy-image.png" alt="" />
            <button className="relative bottom-[45px] left-[105px] bg-[#1814F3] h-[30px] w-[30px] rounded-[50%]"><img src="/src/assets/Icons/pencil.png" alt="edit icon" height="10px" width="15px" className="absolute bottom-2 left-2" /></button>
        </div>
        <div className="flex flex-col gap-y-1">
            <Input placeholder="Hassan Amir" heading="Your Name" type="text" />
            <Input placeholder="hassanamir0506@gmail.com" heading="Email" type="email" />
            <Input placeholder="5 Dec 2003" heading="Date of Birth" type="text" />
            <Input placeholder="House 56 Street 05" heading="Permanent Address" type="text" />
            <Input placeholder="15924" heading="Postal Code" type="number" />
        </div>

        <div className="flex flex-col gap-y-1">
            <Input placeholder="hassan05" heading="User Name" type="text" />
            <Input placeholder="********" heading="Password" type="password" />
            <Input placeholder="House 56 Street 05" heading="Present Address" type="text" />
            <Input placeholder="Rawal pinid" heading="City" type="text" />
            <Input placeholder="Pakistan" heading="Country" type="text" />
        </div>
    </div>
}


export default ProfileForm;