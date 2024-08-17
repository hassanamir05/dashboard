import CardSettingComponent from "./cardSettingComponent";


const settingsData = [
    {
        iconSrc: '/src/assets/creditCardSectionIcons/credit-card-yellow.png',
        bgColor: '#FFF5D9',
        title: 'Block Card',
        description: 'Instantly block your card'
    },
    {
        iconSrc: '/src/assets/creditCardSectionIcons/lock.png',
        bgColor: '#E7EDFF',
        title: 'Change Pin Code',
        description: 'Withdraw without any card'
    },
    {
        iconSrc: '/src/assets/creditCardSectionIcons/google.png',
        bgColor: '#FFE0EB',
        title: 'Add to Google Pay',
        description: 'Withdraw without any card'
    },
    {
        iconSrc: '/src/assets/creditCardSectionIcons/apple.png',
        bgColor: '#DCFAF8',
        title: 'Add to Apple Pay',
        description: 'Instantly block your card'
    },
]

const CardSetting = () => {

    return <div className="flex flex-col gap-y-3 bg-white rounded-[15px] w-auto min-w-[310px] max-w-[400px] p-5">
        {
            settingsData.map((data) => {
                return <CardSettingComponent title={data.title} bgColor={data.bgColor} iconSrc={data.iconSrc} description={data.description} />
            })
        }
    </div>
}

export default CardSetting;