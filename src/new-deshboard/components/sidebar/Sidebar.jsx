import React from "react";
import "./sidebar.scss";
import {AiFillHome} from "react-icons/ai";
import {AiOutlineHome} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import {AiFillMessage} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import {IoPerson}from "react-icons/io5";
import {IoPersonOutline}from "react-icons/io5";
import {BsCloudUploadFill} from "react-icons/bs"
import {BsCloudUpload} from "react-icons/bs";
import {IoSettingsSharp} from "react-icons/io5";
import {IoSettingsOutline} from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function Sidebar({page}) {
  const navitage = useNavigate();
  return (
    <div className="sidebar">
      <h1 className="logo-title">PAY</h1>
      <div className="menu-conainer">
        <div className={page === "dashboard" ? "icons-container selected" : "icons-container"} onClick={()=>navitage("/new-dashboard")}>
          <AiFillHome className="icons fill-icons "/>
          <AiOutlineHome className="icons unfill-icons"/>
        </div>
        <div className={page === "messages" ? "icons-container selected" : "icons-container"} onClick={()=>navitage("/messages")}>
          <MdEmail className="icons fill-icons"/>
          <HiOutlineMail className="icons unfill-icons"/>
        </div>
        <div className={page === "chats" ? "icons-container selected" : "icons-container"} onClick={()=>navitage("/chats")}>
          <AiFillMessage className="icons fill-icons"/>
          <AiOutlineMessage className="icons unfill-icons"/>
        </div>
        <div className={page === "users" ? "icons-container selected" : "icons-container"} onClick={()=>navitage("/users")}>
          <IoPerson className="icons fill-icons"/>
          <IoPersonOutline className="icons unfill-icons"/>
        </div>
        <div className={page === "uploads" ? "icons-container selected" : "icons-container"} onClick={()=>navitage("/uploads")}>
          <BsCloudUploadFill className="icons fill-icons"/>
          <BsCloudUpload className="icons unfill-icons"/>
        </div>
        <div className={page === "settings" ? "icons-container selected" : "icons-container"} onClick={()=>navitage("/settings")}>
          <IoSettingsSharp className="icons fill-icons"/>
          <IoSettingsOutline className="icons unfill-icons"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
