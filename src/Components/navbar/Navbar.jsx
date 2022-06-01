import React,{useContext} from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import {DarkModeContext} from "../../context/darkModeContext"

export default function Narbar() {
  const { dispatch ,darkMode } = useContext(DarkModeContext)
  return (
    <div className="navbar">
         <div className="wrapper">
           <div className="search">
             <input type="text" placeholder="Search..."/>
             <SearchIcon />
           </div>
           <div className="items">
             <div className="item">
              <LanguageIcon className="icon"/>
              English
             </div>
             <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
              {darkMode ?<DarkModeIcon className="icon"/> : <LightModeIcon className="icon"/> }
             </div>
             <div className="item">
              <FullscreenExitIcon className="icon"/>
             </div>
             <div className="item">
              <NotificationsNoneIcon className="icon"/>
              <div className="counter">1</div>
             </div>
             <div className="item">
              <ChatBubbleOutlineIcon className="icon"/>
              <div className="counter">2</div>
             </div>
             <div className="item">
              <ListIcon className="icon"/>
             </div>
             <div className="item">
               <img 
                 src="https://media-exp1.licdn.com/dms/image/C4E03AQFYCV8yusZtyA/profile-displayphoto-shrink_200_200/0/1646405426135?e=1659571200&v=beta&t=WKg6mAP_CP87dIVaENR7SOuSTPwITu-RnZ0yLaeDdhI"
                 alt=""
                 className="avatar"
               />
             </div>
           </div>
         </div>
    </div>
  )
}
