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
          height: "100%",
          // alignItems :'center',
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="inline-flex-parent LoginOutBox"
          style={{ borderRadius: "50px" }}
        >
          <div >
            {flg === "true" && <Log />}
            {flg === "false" && <Regi />}
          </div>
          {/* <hr></hr> */}
          <div style={{ paddingTop: "30px" }}>
            <div className="LoginLogo">
              <img
                className="ImgLogin"
                src={background1}
                alt="Logo of website"
              />
            </div>

            <div>
              <h1 className="textcls" style={{fontFamily:'cursive'}}>Welcome to </h1>
              <h1 className="textcls" style={{fontFamily:'cursive'}}>the community</h1>
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
