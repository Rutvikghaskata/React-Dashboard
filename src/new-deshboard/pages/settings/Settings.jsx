import React from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Settings() {
  return (
    <div className="settings">
      <Sidebar page="settings" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Settings;
