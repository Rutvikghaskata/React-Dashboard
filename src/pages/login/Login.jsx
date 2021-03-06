import { useEffect, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Components/modal/modal";
import { AiFillInfoCircle } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [foucs, setfoucs] = useState();

  const navitage = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleLogin = (e) => {
    if (email.length === 0 && password.length === 0) {
      setEmailError("Email is required");
      setPasswordError("Password is required");
    } else if (email.length === 0) {
      setPasswordError("");
      setEmailError("Email is required");
    } else if (email.length <= 10) {
      setPasswordError("");
      setEmailError("Please Enter valid Email");
    } else if (password.length === 0) {
      setEmailError("");
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setEmailError("");
      setPasswordError("please Enter minimus 6 digits password");
    } else {
      setEmailError("");
      setPasswordError("");
      setLoading(true);
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // dispatch({type:"LOGIN", payload:user})
          setSlideUp(true)
          setTimeout(() =>{navitage("/new-dashboard");},2000)
          
        })
        .catch((error) => {
          setLoading(false);
          openModal();
        });
    }
  };

  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animationTitle, setAnimationTitle] = useState(false);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => setAnimation2(true), 1500);
    setTimeout(() => setAnimationTitle(true), 3000);
  });

  const [slideUp, setSlideUp] = useState(false);
  return (
    <div className={slideUp ? "login slide-login" : "login"}>
      <div
        className={animation2 ? "image-part" : "image-part blank-image-part"}
      >
        <img
          src="https://cdn.wallpapersafari.com/58/98/gXozQ2.jpg"
          alt=""
          className="image"
        />
        <div className="image-upper">
          <div className="form">
            <input
              className={
                foucs === 1 ? "border-focus" : emailError ? "border-error" : ""
              }
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => setfoucs(1)}
              onBlur={(e) => setfoucs("")}
            />
            {emailError && <span>{emailError}</span>}
            <div className="pass-container">
              <input
                className={
                  foucs === 2
                    ? "border-focus"
                    : passwordError
                    ? "border-error"
                    : ""
                }
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => setfoucs(2)}
                onBlur={(e) => setfoucs("")}
              />
              {/* <div className="eye-btn">
              {" "}
              <AiFillInfoCircle
                style={{
                  color: "rgb(13, 1, 73)",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div> */}
            </div>
            {passwordError && <span>{passwordError}</span>}
            <button type="submit" onClick={handleLogin}>
              {loading ? <Dots /> : "Login"}
            </button>
            <div className="info-container">
              <div className="eye-btn">
                {" "}
                <AiFillInfoCircle
                  style={{
                    color: "rgb(13, 1, 73)",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <div className="info-bubble">
                <p>PASSWORD MUST INCLUDE</p>
                <li>minimum 6 characters.</li>
                <li>upper case and lower case letters.</li>
                <li>password must be contain special character.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          animation2
            ? "login-part login-animation login-animation-2"
            : animation
            ? "login-part login-animation"
            : "login-part"
        }
      >
        <h1 className={animationTitle ? "animationTitle" : "title"}>Sign in</h1>
        <div className="form">
          <input
            className={
              foucs === 1 ? "border-focus" : emailError ? "border-error" : ""
            }
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => setfoucs(1)}
            onBlur={(e) => setfoucs("")}
          />
          {emailError && <span>{emailError}</span>}
          <div className="pass-container">
            <input
              className={
                foucs === 2
                  ? "border-focus"
                  : passwordError
                  ? "border-error"
                  : ""
              }
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => setfoucs(2)}
              onBlur={(e) => setfoucs("")}
            />
            {/* <div className="eye-btn">
              {" "}
              <AiFillInfoCircle
                style={{
                  color: "rgb(13, 1, 73)",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div> */}
          </div>
          {passwordError && <span>{passwordError}</span>}
          <button type="submit" onClick={handleLogin}>
            {loading ? <Dots /> : "Login"}
          </button>
          <div className="info-container">
            <div className="eye-btn">
              {" "}
              <AiFillInfoCircle
                style={{
                  color: "rgb(13, 1, 73)",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div className="info-bubble">
              <p>PASSWORD MUST INCLUDE</p>
              <li>minimum 6 characters.</li>
              <li>upper case and lower case letters.</li>
              <li>password must be contain special character.</li>
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Wrong Password"
        description="Please Enter Valid AdminCredential For Sign in !"
      />
    </div>
  );
};

export default Login;
