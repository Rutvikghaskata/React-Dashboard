import React from "react";
import "./salary.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {
  AreaChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  YAxis,
  CartesianGrid,
} from "recharts";
import CircularProgress from "@mui/material/CircularProgress";

const data = [
  { name: "January", Total: 40000 },
  { name: "February", Total: 30000 },
  { name: "March", Total: 40000 },
  { name: "April", Total: 20000 },
  { name: "May", Total: 70000 },
  { name: "June", Total: 60000 },
  { name: "January", Total: 40000 },
  { name: "August", Total: 90000 },
  { name: "September", Total: 80000 },
  { name: "October", Total: 100000 },
  { name: "November", Total: 120000 },
  { name: "December", Total: 100000 },
];

const time = [
  { id: 1, time: "Hour" },
  { id: 2, time: "Day" },
  { id: 3, time: "Week" },
  { id: 4, time: "Month" },
  { id: 5, time: "Year" },
];

function Salary() {

  const [selected, setSelected] = React.useState(4);
  const [loading, setLoading] = React.useState(false);
  
  return (
    <div className="salary">
      <Sidebar page="dashboard" setLoading={setLoading} />
      <div className="details-wrapper">
        <Navbar />
        <div className="info-wrapper">
          <div className="info">
            <div className="sal-chat-and-info-container">
              <div className="sal-chart-container">
                <ResponsiveContainer width="95%" height="90%">
                  <AreaChart
                    width={"100%"}
                    height={"100%"}
                    data={data}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#888" stopOpacity={0.8} />
                        <stop
                          offset="95%"
                          stopColor="rgba(230, 243, 255, 0.896)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      stroke="gray"
                      strokeWidth={0}
                      enableBackground
                    />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="chartGrid"
                    />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Total"
                      stroke="#000"
                      strokeWidth={8}
                      fillOpacity={1}
                      fill="url(#total)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="info-container">
                <div className="image">
                  <img
                    src="https://www.kindpng.com/picc/m/97-978300_hero-person-eye-glasses-young-man-hd-png.png"
                    alt=""
                  />
                </div>
                <h1>Rutvik Ghaskata</h1>

                <div className="section">
                  {time.map((item, index) => {
                    return (
                      <div key={item.id} onClick={() => setSelected(item.id)}>
                        <p className={selected === item.id ? "selected" : ""}>
                          {item.time}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <h1 className="sal">
                  {selected === 1
                    ? "+$11.37"
                    : selected === 2
                    ? "+$91"
                    : selected === 3
                    ? "+$455"
                    : selected === 4
                    ? "+$2000"
                    : selected === 5
                    ? "+$24000"
                    : "0"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="loading-bg">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
}

export default Salary;
