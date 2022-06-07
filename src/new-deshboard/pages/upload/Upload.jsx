import React from "react";
import "./upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Uploads() {
  return (
    <div className="uploads">
      <Sidebar page="uploads" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Uploads;
