import React from "react";
import "./chats.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Chats() {
  return (
    <div className="chats">
      <Sidebar page="chats" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Chats;
