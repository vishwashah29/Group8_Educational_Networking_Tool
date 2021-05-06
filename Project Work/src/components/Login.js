import React from "react";
import { useState } from "react";
import GLogin from "./Via_GoogleLogin";
import { useHistory } from "react-router-dom";

import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

require("dotenv").config();
const Login = ({ onlog }) => {
  const classes = useStyles();
  const history = useHistory();
  const [cookie, setCookie] = useCookies(["userCookie"]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Val, setVal] = useState(false);
  const [Val1, setVal1] = useState(false);
  

  const notify = () => toast.success("Wow so easy!");
  const onsub = (e) => {
    e.preventDefault();
    toast("checking...");

    console.log("ha login ma", email); // from here onwards we have to check id passwords that will be handled in backend
    // onlog();

    let credi = {
      email: email,
      password: password,
    };
    // email ane password check kari ne jo valid hoy to response ma name,email,status
    const URL = process.env.REACT_APP_BACKEND_URL;
    
    axios
      .post(`${URL}/api/login`, credi) // here url to be added
      .then((res) => {
        console.log(res);
        let cookie = {
          name: res.data.name,
          Status: res.data.Status,
          email: res.data.email,
        };

        if (res.data.status === "e1") {
          
          setemail("");
          setpassword("");

          setVal1(true);
          return;
        }
        if (res.data.status === "error") {
          
          setpassword("");
          setVal(true);
          return;
        }

        setCookie("userCookie", cookie); // aaya response ma Status jose regisetr vali cookie type no response hovo joi
        // console.log(cookie);
        // toast.success("Logged in successfully!!");
        alert("Logged in successfully!!");
        history.push("/main");
      })
      .catch((err) => {
        console.log(err);
        return;
      
      });

     

    // after successuful log in lead to main page
    // backend nu thy pachhi aa  history push kadhi nakhvu
    // history.push("/main");
  };
  return (
    <div className="container">
      <form onSubmit={onsub} className="add-form">
        <div className="Login-title">
          <h2 style={{textAlign: "center",fontFamily:'cursive' }}>Log in</h2>
          
          <div style={{padding:'15px',marginLeft:'25%'}}>
          <GLogin />
          </div>
        </div>

        <h4 style={{ textAlign: "center" }}>-OR-</h4>
        <div className="form-control">
          {/* <label >Email-id</label>  */}
          {/* <input
            className="text-box"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          /> */}
          <TextField
            fullWidth
            required
            id="standard-error-helper-text"
            label="Email"
            error={Val1}
            value={email}
            variant="outlined"
            helperText={Val1 && 'Invalid Email'}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-control">
          {/* <label>password </label>  */}
          {/* <input
            className="text-box"
            type="password"
            placeholder=" password "
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          /> */}
          <TextField
            fullWidth
            required
            error={Val}
            id="standard-error-helper-text"
            label="Password"
            type="password"
            variant="outlined"
            helperText={Val && 'Invalid Password'}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Login" className="btn btn-block" />
        <div>
        
        <ToastContainer />
      </div>
      </form>
      <h3 style={{textAlign:'center'}}>Don't have an account yet?</h3>
      <button data-testid="create-new-acc" onClick={() => history.push("/signup")} className="btn-ot">
        {" "}
        Create an account
      </button>
    </div>
  );
};

export default Login;
