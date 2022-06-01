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
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const navitage = useNavigate();

  
  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // dispatch({type:"LOGIN", payload:user})
        navitage("/dashboard")
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <div className="login">
      <div className="image-part">
        <img src="https://cdn.wallpapersafari.com/58/98/gXozQ2.jpg" alt="" className="image"/>
        <div className="image-upper"></div>
      </div>
      <div className="login-part">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" >{loading ? <Dots /> : 'Login'}</button>
          {error && <span>Wrong email or password!</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
