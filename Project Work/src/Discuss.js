import React from "react";
import Shr from "@material-ui/icons/ShareOutlined";
import Thup from "@material-ui/icons/ThumbUpAltOutlined";
import Thup1 from "@material-ui/icons/ThumbUpAlt";

import Thdn from "@material-ui/icons/ThumbDownAltOutlined";
import Thdn1 from "@material-ui/icons/ThumbDown";
import Send from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

import background1 from "./Images/profilepic.png";
import { Cookies, useCookies } from "react-cookie";
import Project from "./Project";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch",
  },

  button: {
    margin: theme.spacing(2),
  },
}));

const Discuss = ({ Discuss, givAnswers, AddAns }) => {
  const [Th, setTh] = useState(true);
  const [Thd, setThd] = useState(true);
  const [Ans, setAns] = useState([]);
  const [rdMor, setRdmr] = useState(true);
  const [yrAns, setYrans] = useState("");
  const [cnt, setCnt] = useState(0);
  const [mx, setMx] = useState(0);

  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");

  const classes = useStyles();

  const ans = (id) => {
    let curAns = givAnswers(id);
    console.log("ans for id:", id, " ans ", curAns);
    setAns(curAns);
  };
  const onAdd = () => {
    let id = Discuss.id,
      Author = Cookie.name;
    AddAns({ id: id, Author: Author, status: Cookie.Status, Comment: yrAns });
    let cur = { id: id, Author: Author, status: Cookie.Status, Comment: yrAns };
    if (Cookie.Status) setAns([cur, ...Ans]);
    else setAns([...Ans, cur]);
  };
  const inc = () => {
    setTh(false);
    setThd(true);
    setMx(1);
  };
  const dcr = () => {
    setTh(true);
    setThd(false);
    setMx(-1);
  };

  const Printer = () => {
    return (
      <>
        {Ans.map((i) => {
          return (
            <div className={`AnsCmt ${i.status ? "special" : "normal"}`}>
              <h4>{i.Author}</h4>
              <p style={{ fontSize: "15px" }}>{i.Comment}</p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="projectbx">
        <div className="DiscussionHeader">
          <div>
            {/* <div
              className="profilepic projhd"
              style={{
                backgroundImage: `url(${background1})`,
                height: "50px",
                width: "45px",
              }}
            ></div> */}

            <h1 className="projhd" style={{ fontSize: "2vw" }}>
              {Discuss.Que}
            </h1>
          </div>

          <div className="Profile">
            <div style={{ paddingRight: "10px" }}>
              <img
                className="DiscussIMG"
                src={background1}
                alt="Logo of website"
              />
            </div>

            <h3 style={{ fontSize: "15px" }}>
              {Discuss.Author}{" "}
              <h5 style={{ fontSize: "10px", color: "gray" }}>
                {" "}
                {Discuss.status ? "Professor" : "Student"}
              </h5>
            </h3>
          </div>
        </div>

        <div className="LikeDislikeBox">
          <div style={{ display: "inline-flex" }}>
            <IconButton aria-label="Thumbsup" color="primary" onClick={inc}>
              {Th && <Thup />}
              {!Th && <Thup1 />}
            </IconButton>
            <div className="LikeDislikeCnt">
              <p>{cnt + mx}</p>
            </div>
            <Button size="small" className={classes.margin} onClick={dcr}>
              {Thd && <Thdn />}
              {!Thd && <Thdn1 />}
            </Button>
            <Button size="small" className={classes.margin}>
              <Shr />
            </Button>
            <div className="Topictag">
              <p>{Discuss.Topic}</p>
            </div>
          </div>
        </div>

        <Printer />
        <div>
          <Button
            className={classes.margin}
            style={{ fontSize: "10px" }}
            onClick={() => {
              {
                rdMor ? ans(Discuss.id) : setAns([]);
              }
              setRdmr(!rdMor);
            }}
          >
            {rdMor ? "read more" : "read less"}
          </Button>
        </div>
        <div className="">
          <TextField
            id="standard-textarea"
            label="Your Answer"
            placeholder=""
            multiline
            value={yrAns}
            onChange={(e) => setYrans(e.target.value)}
          />

          <IconButton
            aria-label="send"
            color="primary"
            className={classes.margin}
            onClick={onAdd}
          >
            <Send fontSize="small" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Discuss;
