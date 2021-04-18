import React from "react";
import { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Prof from "../Images/logo.png";
import Stu from "../Images/logo.png";
import "./Reg.css";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
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

  const clkprof = () => {
    setTog(false);
  };
  const clkstu = () => {
    setTog(true);
  };
  const onsub = (e) => {
    // implemet function to enter user data in database then redirect to main page

    console.log("rending req");
    // axios
    //   .get("http://localhost:5000/hii")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let email = tog ? Semail : Pemail;

    if (tog === false && Pcode !== "DA-Prof-hey-hum") {
      // show msg k prof code khoto chhe
      console.log("HA khoto chhe");
      window.alert("Your Prof code is invalid");
      return;
    }
    let isP = Pcode === "DA-Prof-hey-hum" ? true : false;
    let authCookie = {
      email: email,
      name: Fname + " " + Lname,
      GID: "",
      Status: true,
      Code: Pcode,
    };
    // jo details valid hoy to response ane nahiter err
    // axios
    //   .post(`${API_URL}/addreader`, authCookie) // url tobe added
    //   .then((res) => {
    //     console.log(res);
    //     setCookie("userCookie",authCookie);
    //     history.push("/main");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    setCookie("userCookie", authCookie);
    history.push("/main");
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
          <h3>professor</h3>
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
      </div>
      <form onSubmit={onsub} className="add-form">
        <div className="form-control">
          <div className="inline-flex-par">
            <div>
              <input
                className="text-box"
                type="text"
                placeholder="First Name"
                value={Fname}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="text-box"
                type="text"
                placeholder="Last Name"
                value={Lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
        </div>
        {tog && (
          <div className="form-control">
            {/* <label >Email-id</label>  */}
            <input
              className="text-box"
              type="email"
              placeholder="Student Email"
              value={Semail}
              onChange={(e) => setSemail(e.target.value)}
            />
          </div>
        )}
        {!tog && (
          <div>
            <div className="form-control">
              {/* <label >Email-id</label>  */}
              <input
                className="text-box"
                type="email"
                placeholder="Work Email"
                value={Pemail}
                onChange={(e) => setPemail(e.target.value)}
              />
            </div>
            <div className="form-control">
              {/* <label >Email-id</label>  */}
              <input
                className="text-box"
                type="password"
                placeholder="Professor code"
                value={Pcode}
                onChange={(e) => setPcode(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="form-control">
          {/* <label>password</label>  */}
          <input
            className="text-box"
            type="password"
            placeholder="Create password "
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="form-control">
          {/* <label>password</label>  */}
          <input
            className="text-box"
            id="c_password"
            type="password"
            placeholder="Confirm password "
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
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
      </form>
    </div>
  );
};

export default Regi;
