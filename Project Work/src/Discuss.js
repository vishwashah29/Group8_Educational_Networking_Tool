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

import background1 from "./Images/logo.png";
import { Cookies, useCookies } from "react-cookie";

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
  const [Th, setTh] = useState(false);
  const [Thd, setThd] = useState(false);
  const [Ans, setAns] = useState([]);
  const [rdMor, setRdmr] = useState(true);
  const [yrAns, setYrans] = useState("");
  const [likeCnt, setCnt] = useState(false);
  const [dislikeCnt, setCnt1] = useState(false);

  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");

  const classes = useStyles();

  const ans = (id) => {
    let curAns = givAnswers(id);
    setAns(curAns);
  };
  const onAdd = () => {
    let id = Discuss.id,
      Author = Cookie.name;
    AddAns({ id: id, Author: Author, status: Cookie.Status, comment: yrAns });
    let cur = { id: id, Author: Author, status: Cookie.Status, comment: yrAns };
    if (Cookie.Status) setAns([cur, ...Ans]);
    else setAns([...Ans, cur]);
  };

  const Printer = () => {
    return (
      <>
        {Ans.map((i) => {
          return (
            <div className={`AnsCmt ${i.status ? "special" : "normal"}`}>
              <h4>{i.Author}</h4>
              <p style={{ fontSize: "15px" }}>{i.comment}</p>
            </div>
          );
        })}
      </>
    );
  };
  // const Lkcnt = () =>
  // {
  //     return (
  //         <>
  //             {likeCnt && set}
  //         </>
  //     )
  // }

  return (
    <>
      <div className="projectbx">
        <div className="inline-flex-proj">
          <div
            className="profilepic projhd"
            style={{
              backgroundImage: `url(${background1})`,
              height: "50px",
              width: "45px",
            }}
          ></div>

          <h1 className="projhd" style={{ fontSize: "2vw" }}>
            {Discuss.Ques}
          </h1>
        </div>

        <div>
          <h5>
            {Discuss.Author}
            <p style={{ fontSize: "15px" }}>{Discuss.status}</p>
          </h5>
        </div>
        <div>
          <h4>
            <IconButton
              aria-label="Thumbsup"
              color="primary"
              onClick={() => setTh(!Th)}
            >
              {Th && <Thup />}
              {!Th && <Thup1 />}
            </IconButton>
            <Button
              size="small"
              className={classes.margin}
              onClick={() => setThd(!Thd)}
            >
              {Thd && <Thdn />}
              {!Thd && <Thdn1 />}
            </Button>
            <Button size="small" className={classes.margin}>
              <Shr />
            </Button>
          </h4>
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
