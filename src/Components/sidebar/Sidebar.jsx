import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  const navitage = useNavigate();

  const Signout = () => {
    auth.signOut().then(() => {
      navitage("/login");
    });
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">Rutvik Ghaskata</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>States</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={Signout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="button">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
