const QuickTransferData = [
    {
        source: '/src/assets/Images/dummy-image.png',
        name: 'Muhammad',
        post: 'CEO'
    },
    {
        source: '/src/assets/Images/dummy-image.png',
        name: 'Hassan',
        post: 'CTO'
    },
    {
        source: '/src/assets/Images/dummy-image.png',
        name: 'Amir',
        post: 'CFO'
    }
];

const QuickTransferImage = (props) => {
    return (
        <div className="flex flex-col justify-center items-center w-[55px]">
            <img className="h-[50px] hover:cursor-pointer" src={props.source} alt="user image" />
            <h1 className="text-[#232323] font-lighter text-[15px] ">{props.name}</h1>
            <p className="text-[#718EBF] text-[12px]">{props.post}</p>
        </div>
    );
};

const QuickTransfer = () => {
    return (
        <div className="min-w-[310px] w-auto max-w-[360px] h-[230px] flex flex-col items-center bg-white py-5 rounded-[15px] gap-7" style={{ fontFamily: 'Inter' }} >
            <div className="flex  justify-between w-[60%] gap-5 items-center">
                {QuickTransferData.map((data, index) => {
                    return <QuickTransferImage key={index} source={data.source} name={data.name} post={data.post} />;
                })}
                <button className="h-auto bg-gray-300 ml-7 w-[90px] text-white font-bold rounded-[50%] px-2 py-1"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
            <div class="flex items-center mx-auto px-2">
                <label for="input" class="text-[#718EBF] text-[12px] mr-5">Write Amount</label>
                <div className="flex bg-[#EDF1F7] rounded-full w-[230px]">
                    <input type="text" id="input" class="text-[#718EBF] bg-[#EDF1F7] border-0 outline-none  py-2 rounded-full pl-4 w-[130px]" value="525.50" />

                    <button class="bg-[#1814F3] text-white rounded-full px-4 py-2 flex items-center">
                        <span class="mr-2">Send</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { QuickTransfer, QuickTransferImage };
