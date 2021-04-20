import React from "react";
import { useState } from "react";
import GLogin from "./Via_GoogleLogin";
import { useHistory } from "react-router-dom";

import { Cookies, useCookies } from "react-cookie";
import axios from "axios";

require("dotenv").config();
const Login = ({ onlog }) => {
  const history = useHistory();
  const [cookie, setCookie] = useCookies(["userCookie"]);
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
    axios
      .post("http://localhost:9999/api/login", credi) // here url to be added
      .then((res) => {
        console.log(res);
        let cookie = {
          name: res.data.name,
          Status: res.data.Status,
          email: res.data.email,
        };
        setCookie("userCookie", cookie); // aaya response ma Status jose regisetr vali cookie type no response hovo joi
        // console.log(cookie);
        history.push("/main");
      })
      .catch((err) => {
        console.log(err);
        return;
        setemail("");
        setpassword("");
      });

    // after successuful log in lead to main page
    // backend nu thy pachhi aa  history push kadhi nakhvu
    // history.push("/main");
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
