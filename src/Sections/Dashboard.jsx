import React from 'react';
import PiChartComponent from '../Components/Charts/piChart';
import { QuickTransfer, QuickTransferImage } from '../Components/Helper/QuickTransfer';
import RecentTransaction from '../Components/Helper/RecentTransaction';
import CreditCard from '../Components/Helper/CreditCard'
import BarChartComponent from '../Components/Charts/BarChartComponent';
import LineChartComponent from '../Components/Charts/LineChart';
import ComponentHeading from '../Components/Helper/ComponentHeading';
import { useMediaQuery } from 'react-responsive';
import '../App.css'


const Dashboard = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const chartWidth = isMobile ? 310 : 600;

  return (
    <div className="bg-[#E5E5E5] min-h-screen overflow-y-auto overflow-x-hidden py-10 min-w-screen flex flex-wrap justify-center gap-4 px-5">

      {/* Credit Cards Container */}
      <div className='flex flex-col md:w-[600px] lg:w-[600px] overflow-x-auto'>
        <div className='flex justify-between'>
          <ComponentHeading name="Credit Cards" />
          <ComponentHeading name="See All" />

        </div>


        <div className="flex overflow-x-auto gap-3 h-[230px] hide-scrollbar">
          <CreditCard type="secondary" />
          <CreditCard />
        </div>
      </div>


      {/* Recent Transactions Container */}
      <div>
        <ComponentHeading name=" Recent Transactions" />
        <RecentTransaction />
      </div>


      {/* Bar Chart Container */}
      <div>
        <ComponentHeading name=" Weekly Activity" />
        <BarChartComponent />
      </div>


      {/* Pi Chart Container */}
      <div>
        <ComponentHeading name="Expense Statics" />
        <div className="bg-white p-4 flex justify-center items-center rounded-[15px]" style={{ width: '300px', height: '270px' }}>
          <PiChartComponent />
        </div>
      </div>


      {/* Quick Transfer Container */}
      <div>
        <ComponentHeading name="Quick Transfer" />
        <QuickTransfer />
      </div>


      {/* Line Chart Container */}
      <div className='h-auto' style={{ width: chartWidth }}>
        <ComponentHeading name="Balance History" />
        <LineChartComponent />
      </div>


    </div>
  );
};

export default Dashboard;
