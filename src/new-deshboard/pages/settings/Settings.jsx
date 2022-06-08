import React,{useState} from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";

function Settings() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="settings">
      <Sidebar page="settings" setLoading={setLoading} />
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

export default Settings;
