import React from "react";
import "./salary.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { AreaChart, XAxis, Tooltip, ResponsiveContainer, Area ,YAxis,CartesianGrid} from "recharts";


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

function Salary() {
  return (
    <div className="salary">
      <Sidebar page="dashboard" />
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
                     <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
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

          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Salary;
