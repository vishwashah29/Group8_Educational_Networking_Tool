import { useState, useEffect } from "react";
import Singleq from "./Discuss";
import AskQues from "./AskQues";
import { Cookies } from "react-cookie";
import axios from "axios";

const DiscussionForam = ({ ques }) => {
  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");
  // const [cookie1, setCookie] = useCookies(["userCookie"]);

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
      Cnt:2,
      Topic: "none",
    },
  ]);

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
      Cnt:0,
    };

    axios
      .post("http://localhost:4000/AddQuestion", nwQues)
      .then((res) => {
        console.log("answer added successful");
      })
      .catch((err) => {
        console.log(err);
        alert("adding ques couse some eerr");
        return;
      });

    setDiscussions([...Discussions, nwQues]);
    console.log("ques: " + Discussions);
    console.log(nwQues);
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
      .get("http://localhost:4000/GetQuestion") // here url to be added
      .then((res) => {
        // res will be json of name ,email,status
        console.log("yes in disscussion forum");

        console.log(res);
        setDiscussions(res.data);
        console.log(Discussions);
      })
      .catch((err) => {
        console.log(err);
        alert("Some err in loading projects");
        return;
      });

    axios
      .get("http://localhost:4000/GetAnswer") // here url to be added
      .then((res) => {
        // res will be json of name ,email,status
        //console.log("yes in disscussion answer forum");
        setAns(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some err in loading projects");
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

  const addAnswer = (Ans) => {
    axios
      .post("http://localhost:4000/AddAnswer", Ans)
      .then((res) => {
        console.log("answer added successful");
      })
      .catch((err) => {
        console.log(err);
        alert("adding ans couse some eerr");
        return;
      });
    setAns([...Answers, Ans]);
  };

  useEffect(() => {
    console.log({ Answers });
  }, [Answers]);

  return (
    <div className="discussion-box">
      <div className="question-container">
        <div>
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
        <div className="AskQueBox">
          <AskQues addQue={AddaQues} />
        </div>
      </div>
    </div>
  );
};

export default DiscussionForam;
