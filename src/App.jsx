import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appbar from "./Components/Appbar";
import Dashboard from "./Sections/Dashboard";
import Transaction from "./Sections/Transaction";
import Loan from "./Sections/Loan";
import MyPrivilige from "./Sections/MyPriviliges";
import Service from "./Sections/Service";
import Setting from "./Sections/Setting";
import CreditCard from "./Sections/CreditCard";
import Account from "./Sections/account";
import Investment from "./Sections/investment";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Appbar />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "transactions",
          element: <Transaction />,
        },
        {
          path: "accounts",
          element: <Account />,
        },
        {
          path: "investments",
          element: <Investment />,
        },
        {
          path: "credit-cards",
          element: <CreditCard />,
        },
        {
          path: "loans",
          element: <Loan />,
        },
        {
          path: "services",
          element: <Service />,
        },
        {
          path: "my-priviliges",
          element: <MyPrivilige />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default App;
