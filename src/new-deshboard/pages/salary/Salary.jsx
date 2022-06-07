import React from "react";
import "./salary.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Salary() {
  return (
    <div className="salary">
      <Sidebar page="dashboard" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Salary;
