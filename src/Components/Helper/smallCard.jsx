const SmallCard = (props) => {
    console.log('inside small cards component');

    return (
        <div
            style={{ fontFamily: 'Inter' }}
            className="rounded-[20px] bg-white flex flex-row justify-center items-center h-[90px] p-4 w-auto min-w-[167px] max-w-[300px]"
        >
            <div
                className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center"
                style={{ backgroundColor: props.bgColor }}
            >
                <img src={props.iconSrc} alt="icon" className="w-[20px] h-[20px]" />
            </div>

            <div className="flex flex-col items-center justify-between py-1 ml-2">
                <span className="text-[12px]">{props.title}</span>
                <span className="font-semibold text-[16px]">{props.value}</span>
            </div>
        </div>
    );
}

export default SmallCard;
