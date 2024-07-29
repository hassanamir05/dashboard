import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  console.log("inside sidebar component");

  return (
    <div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Dashboard
      </NavLink>
      <NavLink
        to="/transactions"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Transactions
      </NavLink>
      <NavLink
        to="/accounts"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Accounts
      </NavLink>
      <NavLink
        to="/investments"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Investments
      </NavLink>
      <NavLink
        to="/credit-cards"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Credit Cards
      </NavLink>
      <NavLink
        to="/loans"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Loans
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/my-privileges"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        My Privileges
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>
    </div>
  );
};

export default Sidebar;
