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


function Sidebar({page,setLoading}) {
  const navitage = useNavigate();

  const navigation = (path)=>{
    setLoading(true)
    setTimeout(()=>{navitage(path);setLoading(false)},1000)
  }

  return (
    <div className="sidebar">
      <h1 className="logo-title">PAY</h1>
      <div className="menu-conainer">
        <div className={page === "dashboard" ? "icons-container selected" : "icons-container"} onClick={()=>navigation('/new-dashboard')}>
          <AiFillHome className="icons fill-icons "/>
          <AiOutlineHome className="icons unfill-icons"/>
        </div>
        <div className={page === "messages" ? "icons-container selected" : "icons-container"} onClick={()=>navigation('/messages')}>
          <MdEmail className="icons fill-icons"/>
          <HiOutlineMail className="icons unfill-icons"/>
        </div>
        <div className={page === "chats" ? "icons-container selected" : "icons-container"} onClick={()=>navigation("/chats")}>
          <AiFillMessage className="icons fill-icons"/>
          <AiOutlineMessage className="icons unfill-icons"/>
        </div>
        <div className={page === "users" ? "icons-container selected" : "icons-container"} onClick={()=>navigation("/users")}>
          <IoPerson className="icons fill-icons"/>
          <IoPersonOutline className="icons unfill-icons"/>
        </div>
        <div className={page === "uploads" ? "icons-container selected" : "icons-container"} onClick={()=>navigation("/uploads")}>
          <BsCloudUploadFill className="icons fill-icons"/>
          <BsCloudUpload className="icons unfill-icons"/>
        </div>
        <div className={page === "settings" ? "icons-container selected" : "icons-container"} onClick={()=>navigation("/settings")}>
          <IoSettingsSharp className="icons fill-icons"/>
          <IoSettingsOutline className="icons unfill-icons"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
