import background from "./img/bg.png";
import Regi from "./components/Regi";
import Log from "./components/Login";
import Syn from "./components/Synergy";
import PropTypes from "prop-types";
import { useState } from "react";
import "./index.css";

import background1 from "./Images/logo.png";

const Logmain = ({ flg }) => {
  return (
    <>
      <div
        className="containerbg inline-flex-parent"
        style={{
          backgroundImage: `url(${background})`,
          // alignItems :'center',
        }}
      >
        <div
          className=" container-bg inline-flex-parent LoginOutBox"
          style={{ 
          background: "rgb(215,228,228)",
          background:
            "linear-gradient(90deg, rgba(215,228,228,1) 0%, rgba(206,211,212,1) 36%, rgba(0,212,255,1) 100%)",
          borderRadius:"50px" }}
        >
          <div class = "container-fluid">
            {flg === "true" && <Log />}
            {flg === "false" && <Regi />}
          </div>
          {/* <hr></hr> */}
          <div className= "container-fluid" style={{ paddingTop: "30px" }}>
            <div className="LoginLogo">
              <img
                className="ImgLogin"
                src={background1}
                alt="Logo of website"
              />
            </div>
            <div className = "container-fluid">
              <h1 className="textcls">Welcome to </h1>
              <h1 className="textcls">the community</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Logmain.propType = {
  flg: PropTypes.bool,
};

export default Logmain;
