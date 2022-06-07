import React from "react";
import "./message.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Messages() {
  return (
    <div className="message">
      <Sidebar page="messages" />
      <div className="details-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Messages;
