import { useState, useEffect } from "react";
import Singleq from "./Discuss";
import AskQues from "./AskQues";
import { Cookies } from "react-cookie";
import axios from "axios";
import pic from "./Images/profilepic.png";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
require("dotenv").config();

const DiscussionForam = ({ ques }) => {
  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");
  const history = useHistory();
  // const [cookie1, setCookie] = useCookies(["userCookie"]);
  const URL = process.env.REACT_APP_BACKEND_URL;
  // const URL = "http://localhost:9999";
  const [Discussions, setDiscussions] = useState([
    {
      id: 1, // this is discussion id
      Title: "Compititve coding", // review abt renfedknn  // give me some res  abt node js
      Ques: "What is Software Enggineering",
      Author: "John Wick",
      status: "prof",
      Cnt: 3,
      Topic: "none", // "academic //devolopmet "
    },
    {
      id: 2,
      Title: "Compititve coding",
      Ques: "What is Software Enggineering ",
      Author: "saurabh Tiwari",
      status: "prof",
      Cnt: 2,
      Topic: "none",
    },
  ]);
  const [Dis_Original, setDis_Original] = useState([]);

  const AddaQues = ({ Ques, Topic }) => {
    const id = Discussions.length + 1; // to be added Dicussion id unique
    const Author = Cookie.name; // current user name
    const status = Cookie.Status; // if current student is prof or student
    const nwQues = {
      id: id,
      Author: Author,
      Que: Ques,
      Topic: Topic,
      Title: "jovu jose aa su kam rakhyu tu",
      status: status,
      Cnt: 0,
    };

    axios
      .post(`${URL}/AddQuestion`, nwQues)
      .then((res) => {
        console.log("answer added successful");
        toast.success("Question sucessfully added");
        // alert("successfully added Question");
      })
      .catch((err) => {
        console.log(err);
        alert("adding ques couse some eerr");
        return;
      });

    setDiscussions([nwQues, ...Discussions]);
    // console.log("ques: " + Discussions);
    // console.log(nwQues);
  };

  const [Answers, setAns] = useState([
    {
      id: 1,
      Author: "himanshu",
      status: 0,
      comment: "Answer 1",
    },
    {
      id: 1,
      Author: "himanshu",
      status: 0,
      comment: "Answer again 1",
    },
    {
      id: 2,
      Author: "Saurabh Tiwari",
      status: 1,
      comment:
        "I think this is good course to learn things and also good team work",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${URL}/GetQuestion`) // here url to be added
      .then((res) => {
        // res will be json of name ,email,status
        console.log("yes in disscussion forum");

        console.log(res);
        setDiscussions(res.data);
        setDis_Original(res.data);
        console.log(Discussions);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error in loading Questions");
        return;
      });

    axios
      .get(`${URL}/GetAnswer`) // here url to be added
      .then((res) => {
        // res will be json of name ,email,status
        //console.log("yes in disscussion answer forum");

        setAns(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some err in loading Answers");
        return;
      });
  }, []);

  const giveAnswer = (id) => {
    console.log("Ans here ", Answers);
    let temp = Answers.filter((i) => i.id === id && i.status === true);
    let srt = Answers.filter((i) => i.id === id && i.status !== true);

    if (srt.length > 0) temp = [...temp, ...srt];
    return temp;
  };

  const Signout = () => {
    history.push("/login");
  };
  const addAnswer = (Ans) => {
    axios
      .post(`${URL}/AddAnswer`, Ans)
      .then((res) => {
        console.log("answer added successful");
        toast.success("successfully added Answer");
      })
      .catch((err) => {
        console.log(err);
        alert("adding ans couse some eerr");
        return;
      });
    setAns([...Answers, Ans]);
  };
  const [flt, setFlt] = useState("");
  const filter_search = (fltt) => {
    if (fltt === "") {
      setDiscussions(Dis_Original); // dis_org ,Discussion
      return;
    }
    // console.log("fliter",fltt);
    const temp = Dis_Original.filter(
      (i) => i.Topic === fltt || i.Author === fltt
    );
    setDiscussions(temp);
    // console.log("filter kare",temp);
    // console.log("filter kare",Discussions);
  };

  useEffect(() => {
    console.log({ Answers });
  }, [Answers]);

  return (
    <div className="discussion-box">
      <div className="question-container">
        <div>
          <div>
            <TextField
              style={{ width: "93%" }}
              id="outlined-search"
              label="Search"
              type="search"
              //  variant="outlined"
              value={flt}
              onChange={(e) => setFlt(e.target.value)}
            ></TextField>
            <IconButton
              aria-label="Thumbsup"
              color="primary"
              onClick={() => filter_search(flt)}
            >
              <SearchIcon />
            </IconButton>
          </div>
          {Discussions.map((Discuss) => (
            <>
              <div className="discussionBox">
                <div>
                  <Singleq
                    Discuss={Discuss}
                    givAnswers={giveAnswer}
                    AddAns={addAnswer}
                  ></Singleq>
                </div>
              </div>
            </>
          ))}
        </div>
        <div style={{ display: "inline-block" }}>
          <div className="profile-icon">
            <div style={{ display: "inline-flex", float: "right" }}></div>
            <img src={pic} style={{ height: "50px", width: "50px" }} />
            <p>&nbsp;&nbsp;&nbsp;{Cookie.name}</p>
            <Button onClick={Signout}>Sign Out</Button>
          </div>
          <div className="AskQueBox">
            <AskQues addQue={AddaQues} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForam;
