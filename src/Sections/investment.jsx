import InvestmentChartComponent from "../Components/Charts/investmentChart";
import ComponentHeading from '../Components/Helper/ComponentHeading';
import MonthlyRevenueChartComponent from "../Components/Charts/monthlyRevenueChart";
import ServiceCard from "../Components/Helper/serviceCard";
import InvestmentCollection from "../Components/Helper/investmentCollection";
import StocksComponent from "../Components/Helper/stocks";
import InvestmentSmallCards from "../Components/Helper/investmentSmallCards";

const investmentData = [
  {
    title: 'Invested Amount',
    description: '$15,000',
    iconSrc: '/src/assets/InvestmentSectionIncons/money-bag.png',
    bgColor: '#DCFAF8',
  },
  {
    title: 'No. of Investments',
    description: '1,520',
    iconSrc: '/src/assets/InvestmentSectionIncons/investment-chart.png',
    bgColor: '#FFE0EB',
  },
  {
    title: 'Return Rate',
    description: '+5.80%',
    iconSrc: '/src/assets/InvestmentSectionIncons/return-rate.png',
    bgColor: '#E7EDFF',
  },
]

const Investment = () => {
  return (

    <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen flex flex-wrap px-5">

      <div className="flex gap-2 flex-row justify-evenly w-full h-[140px] overflow-x-scroll hide-scrollbar">
        {
          investmentData.map((serviceData) => {
            return <InvestmentSmallCards title={serviceData.title} iconSrc={serviceData.iconSrc} description={serviceData.description} bgColor={serviceData.bgColor} />
          })
        }
      </div>


      <div className="flex flex-row w-full gap-x-7 flex-wrap overflow-x-auto">


        <div className="flex flex-col max-w-[540px] min-w-[300px] w-[450px] ">
          <ComponentHeading name="Yearly Investment" />
          <InvestmentChartComponent />
        </div>

        <div className="flex flex-col  max-w-[540px] min-w-[300px] w-[450px] ">
          <ComponentHeading name="Monthly Revenue" />
          <MonthlyRevenueChartComponent />
        </div>
      </div>


      <div className="flex flex-row w-full gap-x-7 flex-wrap ">


        <div className="flex flex-col">
          <ComponentHeading name="My Investments" />
          <InvestmentCollection />
        </div>

        <div className="flex flex-col">
          <ComponentHeading name="Trending Stocks" />
          <StocksComponent />
        </div>



      </div>



    </div>

  );
}


export default Investment;
