import React,{useState} from "react";
import "./upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";

function Uploads() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="uploads">
      <Sidebar page="uploads" setLoading={setLoading} />
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

export default Uploads;
