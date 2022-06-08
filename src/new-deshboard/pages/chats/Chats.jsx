import React,{useState} from "react";
import "./chats.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";

function Chats() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="chats">
      <Sidebar page="chats" setLoading={setLoading} />
      <div className="details-wrapper">
        <Navbar />
      </div>
      {loading && (
        <div className="loading-bg">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
}

export default Chats;
