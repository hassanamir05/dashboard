import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Appbar from "../Components/Appbar";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Appbar />
        {<Outlet />}
      </div>
    </div>
  );
};

export default AppLayout;
