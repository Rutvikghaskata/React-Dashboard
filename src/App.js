import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Onboarding from "./pages/onboarding/Onboarding";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import NewDashboard from "./new-deshboard/pages/dashboard/Dashboard";
import Salary from "./new-deshboard/pages/salary/Salary";
import PayPal from "./new-deshboard/pages/paypal/PayPal";
import Message from "./new-deshboard/pages/message/Message";
import Chats from "./new-deshboard/pages/chats/Chats";
import Users from "./new-deshboard/pages/users/User";
import Upload from "./new-deshboard/pages/upload/Upload";
import Settings from "./new-deshboard/pages/settings/Settings";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Onboarding />} />

            <Route index path="dashboard" element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="/new-dashboard">
              <Route index element={<NewDashboard />} />
              <Route path="salary" element={<Salary />} />
              <Route path="paypal" element={<PayPal />} />
            </Route>
            <Route path="/messages">
              <Route index element={<Message />} />
            </Route>
            <Route path="/chats">
              <Route index element={<Chats />} />
            </Route>
            <Route path="/users">
              <Route index element={<Users />} />
            </Route>
            <Route path="/uploads">
              <Route index element={<Upload />} />
            </Route>
            <Route path="/settings">
              <Route index element={<Settings />} />
            </Route>

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
