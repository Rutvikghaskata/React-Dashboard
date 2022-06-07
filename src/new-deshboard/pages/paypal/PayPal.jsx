import React from "react";
import "./paypal.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function PayPal() {
  return (
    <div className="paypal">
      <Sidebar page="dashboard" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default PayPal;
