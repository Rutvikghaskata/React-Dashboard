import React,{useState} from "react";
import "./message.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";

function Messages() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="message">
      <Sidebar page="messages" setLoading={setLoading} />
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

export default Messages;
