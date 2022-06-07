import React from "react";
import "./user.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function User() {
  return (
    <div className="user">
      <Sidebar page="users" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default User;
