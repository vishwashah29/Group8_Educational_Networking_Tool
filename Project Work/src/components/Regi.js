import React from "react";
import { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Prof from "../Images/logo.png";
import Stu from "../Images/logo.png";
import "./Reg.css";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

require("dotenv").config();

const Regi = ({ onadd }) => {
  const history = useHistory();

  const [cookie, setCookie] = useCookies(["userCookie"]);

  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Pemail, setPemail] = useState("");
  const [Pcode, setPcode] = useState("");
  const [Semail, setSemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [tog, setTog] = useState(true);
  const [tog1, setTog1] = useState(false);
  const [Val, setVal] = useState(false);

  const clkprof = () => {
    setTog(false);
  };
  const clkstu = () => {
    setTog(true);
  };
  const onsub = (e) => {
    // implemet function to enter user data in database then redirect to main page
    e.preventDefault();
    console.log("sending req");
    // axios
    //   .get("http://localhost:5000/hii")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (password !== cpassword) {
      setVal(true);
      setcpassword("");
      return;
    }

    let email = tog ? Semail : Pemail;

    // if (tog === false && (Pcode !== "John Reese" || Pcode !== "DA-Admin-hey-hum"))
    //   {
    //   // show msg k prof code khoto chhe
    //   console.log("HA khoto chhe");
    //   window.alert("Your Prof code is invalid");
    //   return;
    // }
    let isP = Pcode === "John Reese" ? true : false;
    let isA = Pcode === "DA-Admin-hey-hum" ? true : false;
    if(tog===false && (Pcode!="John Reese")) 
    {
      setPcode("");
      toast.warn("Your Professor code is Wrong Please Try again");
      return;
    }
    let authCookie = {
      email: email,
      name: Fname + " " + Lname,
      GID: "",
      Status: isP || isA,
      Code: Pcode,
    };

    let NewUser = {
      email: email,
      firstname: Fname,
      lastname: Lname,
      password: password,
      interest: [],
      admincode: Pcode,
    };

    const URL = process.env.REACT_APP_BACKEND_URL;

    axios
      .post(`${URL}/api/register`, NewUser) // url tobe added
      .then((res) => {
        if (res.data.status === "ok") {
          console.log("response", res);
          setCookie("userCookie", authCookie);
          alert("Your accout has been created successfully!");
          history.push("/main");
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setCookie("userCookie", authCookie);
    // history.push("/main");
    return;
  };

  return (
    <div className="container">
      <h1>Create an Account</h1>
      <div className="inline-flex-par1">
        <div>
          <div
            className="imglogo"
            style={{
              backgroundImage: `url(${Prof})`,
              height: "90px",
              width: "50px",
              // alignItems :'center',
              justifyContent: "center",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={clkprof}
          ></div>
          <h3>Professor</h3>
        </div>
        {/* <hr></hr> */}
        <div>
          <div
            className="imglogo"
            style={{
              backgroundImage: `url(${Stu})`,
              height: "90px",
              width: "50px",
              // alignItems :'center',
              justifyContent: "center",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={clkstu}
          ></div>
          <h3>Student</h3>
        </div>
        <ToastContainer/>
      </div>
      <form onSubmit={onsub} className="add-form">
        <div className="form-control">
          <div className="inline-flex-par">
            <div>
              <TextField
                required
                id="standard-error-helper-text"
                label="FirstName"
                variant="outlined"
                value={Fname}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                id="standard-error-helper-text"
                label="LastName"
                variant="outlined"
                value={Lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
        </div>
        {tog && (
          <div className="form-control">
            <TextField
              required
              fullWidth
              id="standard-error-helper-text"
              label="Student Email"
              type="email"
              variant="outlined"
              value={Semail}
              onChange={(e) => setSemail(e.target.value)}
            />
          </div>
        )}
        {!tog && (
          <div>
            <div className="form-control">
              {/* <label >Email-id</label>  */}
              {/* <input
                className="text-box"
                type="email"
                placeholder="Work Email"
                value={Pemail}
                onChange={(e) => setPemail(e.target.value)}
              /> */}
              <TextField
              required
                fullWidth
                id="standard-error-helper-text"
                label="Professor Email"
                type="email"
                variant="outlined"
                value={Pemail}
                onChange={(e) => setPemail(e.target.value)}
              />
            </div>
            <div className="form-control">
              {/* <label >Email-id</label>  */}

              <TextField
              required
                fullWidth
                id="standard-error-helper-text"
                label="Professor Code"
                type="password"
                variant="outlined"
                value={Pcode}
                onChange={(e) => setPcode(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="form-control">
          {/* <label>password</label>  */}

          <TextField
            fullWidth
            required
            id="standard-error-helper-text"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="form-control">
          {/* <label>password</label>  */}

          <TextField
            fullWidth
            required
            error={Val}
            id="standard-error-helper-text"
            label="Confirm Password"
            type="password"
            variant="outlined"
            helperText={Val && "Password do not match"}
            value={cpassword}
            onChange={(e) => setcpassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            style={{ height: "20px", width: "20px" }}
            required
          />
          <label style={{ fontSize: "15px" }}>
            {" "}
            By registering, you confirm to have read and agree to our
            <a href="#">Terms and condition.</a>
          </label>
        </div>

        <input type="submit" value="Register" className="btn btn-block" />
        <button data-testid="create-new-acc" onClick={() => history.push("/login")} className="btn-ot">
        {" "}
        Login
      </button>
      </form>
    </div>
  );
};

export default Regi;
