import { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navitage = useNavigate();

  const handleLogin = (e) => {
    if(email.length === 0 && password.length === 0) {
      setEmailError("Email is required");
      setPasswordError("Password is required");
    }
    else if (email.length === 0) {
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
      setPasswordError("");
      setLoading(true);
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // dispatch({type:"LOGIN", payload:user})
          navitage("/dashboard");
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
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
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span>{emailError}</span>}
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span>{passwordError}</span>}
            <button type="submit" onClick={handleLogin}>{loading ? <Dots /> : "Login"}</button>
            {error && <span className="err">Wrong email or password!</span>}
          </div>
        </div>
      </div>
      <div className="login-part">
      <div className="form">
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span>{emailError}</span>}
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span>{emailError}</span>}
            <button type="submit" onClick={handleLogin}>{loading ? <Dots /> : "Login"}</button>
            {error && <span className="err">Wrong email or password!</span>}
          </div>
      </div>
    </div>
  );
};

export default Login;
