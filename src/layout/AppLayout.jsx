import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Appbar from "../Components/Appbar";

const AppLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex flex-col w-screen">
        <Appbar />

        <Outlet />
      </div>

    </div>
  );
};

export default AppLayout;
