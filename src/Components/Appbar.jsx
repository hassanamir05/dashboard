import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "./Helper/SearchBox";
import ProfilePic from './Helper/UserProfilePic';
import { SidebarContext } from "../Context/sidebarContext";
import IconButton from '../Components/Helper/IconButton';

const Appbar = () => {
  const { mobileSidebarVisible, setMobileSidebarVisible } = useContext(SidebarContext);
  const [title, setTitle] = useState('Overview');
  const location = useLocation();

  useEffect(() => {
    const printPageLocation = () => {
      let locationPath = location.pathname;
      let newLocationPath = locationPath.substring(1);
      changeTitle(newLocationPath);
    };

    const changeTitle = (name) => {
      switch (name) {
        case '': {
          setTitle('Overview');
          break;
        }
        case 'transactions': {
          setTitle('Transactions');
          break;
        }
        case 'accounts': {
          setTitle('Accounts');
          break;
        }
        case 'investments': {
          setTitle('Investments');
          break;
        }
        case 'credit-cards': {
          setTitle('Credit Cards');
          break;
        }
        case 'loans': {
          setTitle('Loans');
          break;
        }
        case 'services': {
          setTitle('Services');
          break;
        }
        case 'setting': {
          setTitle('Setting');
          break;
        }
        case 'my-priviliges': {
          setTitle('My Priviliges');
          break;
        }
        default: {
          setTitle('Overview');
          break;
        }
      }
    };

    printPageLocation();
  }, [location]);

  return (
    <div className="h-[75px] w-full px-10 pt-3 flex justify-between items-center sticky top-0 bg-white z-10 shadow-md">

      <button className="ml-4 md:hidden mr-2" onClick={() => setMobileSidebarVisible(!mobileSidebarVisible)}>
        <i className="fa-solid fa-bars"> </i>
      </button>

      <h1 style={{ fontFamily: 'Inter' }} className="text-2xl font-[500] text-headingColor">
        {title}
      </h1>

      <div className="flex items-center gap-3">
        <SearchBox />
        <div className="flex items-center gap-3">
          <IconButton src="/src/assets/Icons/settingIcon.png" />
          <IconButton src="/src/assets/Icons/notification.png" />
        </div>
        <ProfilePic src="https://www.shareicon.net/data/128x128/2016/09/15/829443_man_512x512.png" />
      </div>
    </div>
  );
};

export default Appbar;
