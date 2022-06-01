import React, { useEffect } from "react";
import "./onboarding.scss";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export default function Onboarding() {
  const navitage = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    setTimeout(() => {
      user ? navitage("/dashboard") : navitage("/login");
    }, 5000);
  });
  return <div className="onboarding"></div>;
}
