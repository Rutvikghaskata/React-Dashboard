import { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Components/modal/modal";

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
          navitage("/dashboard");
        })
        .catch((error) => {
          setLoading(false);
          openModal();
        });
    }
  };

  return (
    <div className="login">
      <div className="image-part">
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
            {passwordError && <span>{passwordError}</span>}
            <button type="submit" onClick={handleLogin}>
              {loading ? <Dots /> : "Login"}
            </button>
            {/* {error && <span className="err">Wrong email or password!</span>} */}
          </div>
        </div>
      </div>
      <div className="login-part">
        <h1 className="title">Sign in</h1>
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
          <input
            className={
              foucs === 2 ? "border-focus" : passwordError ? "border-error" : ""
            }
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => setfoucs(2)}
            onBlur={(e) => setfoucs("")}
          />
          {passwordError && <span>{passwordError}</span>}
          <button type="submit" onClick={handleLogin}>
            {loading ? <Dots /> : "Login"}
          </button>
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
