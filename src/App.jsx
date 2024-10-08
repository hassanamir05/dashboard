import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appbar from "./Components/Appbar";
import Dashboard from "./Sections/Dashboard";
import Transaction from "./Sections/Transaction";
import Loan from "./Sections/Loan";
import MyPrivilige from "./Sections/MyPriviliges";
import Service from "./Sections/Service";
import Setting from "./Sections/Setting";
import CreditCardSection from "./Sections/CreditCard";
import Account from "./Sections/account";
import Investment from "./Sections/investment";
import AppLayout from "./layout/AppLayout";
import SidebarProvider from "./Context/sidebarContext";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
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
          element: <CreditCardSection />,
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
          path: "setting",
          element: <Setting />,
        },
        {
          path: "*",
          element: <h1>No such path exist</h1>,
        },
      ],
    },
  ]);

  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>)
};

export default App;
