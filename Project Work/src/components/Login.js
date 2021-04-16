import React from "react";
import { useState } from "react";
import GLogin from "./Via_GoogleLogin";
import { useHistory } from "react-router-dom";
require("dotenv").config();
// import axios from 'axios';

const Login = ({ onlog }) => {
  const history = useHistory();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onsub = (e) => {
    e.preventDefault();

    console.log("ha login ma"); // from here onwards we have to check id passwords that will be handled in backend
    // onlog();
    
    let credi = {
      email: email,
      password: password,
    };
    // email ane password check kari ne jo valid hoy to response ma name,email,status 
    // axios
    //   .post(,credi)     // here url to be added
    //   .then((res) => {
    //     console.log(res);
    //    setCookie("userCookie", res);
    //    history.push("/main");
    //   })
    //   .catch((err) => {
    //     console.log(err);
            return ;     
    //     setemail("");
    //     setpassword("");
    //   });

    // after successuful log in lead to main page
    // backend nu thy pachhi aa  history push kadhi nakhvu
    history.push("/main");
  };
  return (
    <div className="container">
      <form onSubmit={onsub} className="add-form">
        <div className="Login-title">
          <strong>Login</strong>
          <GLogin />
        </div>

        <h4 style={{ textAlign: "center" }}>-OR-</h4>
        <div className="form-control">
          {/* <label >Email-id</label>  */}
          <input
            className="text-box"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-control">
          {/* <label>password </label>  */}
          <input
            className="text-box"
            type="password"
            placeholder=" password "
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Login" className="btn btn-block" />
      </form>
      <h3>Don't have account yet?</h3>
      <button onClick={() => history.push("/signup")} className="btn-ot">
        {" "}
        Create an account
      </button>
    </div>
  );
};

export default Login;
