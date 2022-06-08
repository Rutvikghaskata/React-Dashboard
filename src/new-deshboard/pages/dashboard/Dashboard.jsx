import React, { useState } from "react";
import "./dashboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { BsBank } from "react-icons/bs";
import { RiPaypalLine } from "react-icons/ri";
import { BiWifi } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import { AreaChart, XAxis, Tooltip, ResponsiveContainer, Area } from "recharts";
import { BiChevronDown } from "react-icons/bi";
import { BsSortAlphaDown } from "react-icons/bs";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import { ImGift } from "react-icons/im";
import { BsBasket } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { RiCarWashingLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const recentData = [
  {
    id: 1,
    title: "Shopping",
    date: "05 Jun 2020 10:00",
    price: "$300",
    icon: <ImGift className="Type-icon" />,
  },
  {
    id: 2,
    title: "Grocery",
    date: "12 Dec 2020 08:00",
    price: "$45",
    icon: <BsBasket className="Type-icon" />,
  },
  {
    id: 3,
    title: "Gym",
    date: "23 April 2020 12:00",
    price: "$125",
    icon: <CgGym className="Type-icon" />,
  },
  {
    id: 4,
    title: "Laundry",
    date: "27 Mar 2020 09:45",
    price: "$90",
    icon: <MdOutlineLocalLaundryService className="Type-icon" />,
  },
  {
    id: 5,
    title: "Car Repair",
    date: "28 Jun 2020 06:20",
    price: "$170",
    icon: <RiCarWashingLine className="Type-icon" />,
  },
];

function Dashboard() {
  const navitage = useNavigate();

  const [flow, setFlow] = useState("asc");

  const [loading, setLoading] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar page="dashboard" setLoading={setLoading} />
      <div className="details-wrapper">
        <Navbar />
        <div className="info-wrapper">
          <div className="info">
            <div className="upper-info">
              <div className="details-box">
                <div className="box">
                  <p>dashboard</p>
                  <div className="credit-card">
                    <div className="top">
                      <BiWifi className="wifi" />
                    </div>
                    <p className="card-number">4562 1122 4595 7852</p>
                    <div className="center">
                      <div className="round-1"></div>
                      <div className="round-2"></div>
                    </div>
                    <p className="bottom-title">CARD HOLDER</p>
                    <div className="bottom">
                      <h1>Rutvik Ghaskata</h1>
                      <h3>Mastercard</h3>
                    </div>
                  </div>
                  <div className="credit-card-back-1"></div>
                  <div className="credit-card-back-2"></div>
                  <div className="credit-card-back-3"></div>
                </div>
                <div className="box2">
                  <p>upcoming payments</p>

                  <div className="sal-pay-box">
                    <div
                      className="salary"
                      onClick={() => navitage("/new-dashboard/salary")}
                    >
                      <div className="salary-icon-bg">
                        <BsBank className="sal-icon" />
                      </div>
                      <h1>Salary</h1>
                      <p>Belong interactive</p>
                      <h2>+$2000</h2>
                    </div>
                    <div
                      className="payment"
                      onClick={() => navitage("/new-dashboard/paypal")}
                    >
                      <div className="payment-icon-bg">
                        <RiPaypalLine className="pay-icon" />
                      </div>
                      <h1>Paypal</h1>
                      <p>Freelance payment</p>
                      <h2>$45:00</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="record-container">
                <div className="header">
                  <p>Recent Transection</p>
                  <div className="shorting-section">
                    <div className="sort-menu">
                      <p>Sort by</p>
                      <BiChevronDown className="down-arrow-icon" />
                    </div>
                    <div
                      onClick={() => setFlow(flow === "asc" ? "dec" : "asc")}
                    >
                      {flow === "asc" ? (
                        <BsSortAlphaDown className="icon" />
                      ) : (
                        <BsSortAlphaDownAlt className="icon" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="data-container">
                  {recentData.map((item, index) => {
                    return (
                      <div className="data">
                        <div className="title-icon">
                          {item.icon}
                          <p className="title">{item.title}</p>
                        </div>
                        <p className="Date">{item.date}</p>
                        <p className="Prize">{item.price}</p>
                        <FiMoreVertical className="icon" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="box3">
              <div className="heading">
                <div className="icon">
                  <FiMoreVertical className="icon" />
                </div>
              </div>
              <div className="title">
                <p>Saved This Month</p>
              </div>
              <h1>$25,999.00</h1>
              <div className="day-week-month-year">
                <p>Day</p>
                <p>Week</p>
                <p className="selected">Month</p>
                <p>Year</p>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                  width={"100%"}
                  height={250}
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
              <div className="back-card3"></div>
              <div className="back-card2"></div>
              <div className="back-card1"></div>
              <div className="card">
                <div className="details">
                  <p>Plan for 2020</p>
                  <h2>Completed</h2>
                </div>
                <div className="progress-bar">
                  <div className="featuredChart">
                    <CircularProgressbar
                      value={60}
                      text={"60%"}
                      strokeWidth={20}
                    />
                  </div>
                </div>
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

export default Dashboard;
