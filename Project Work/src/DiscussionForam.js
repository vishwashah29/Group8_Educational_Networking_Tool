import { useState, useEffect } from "react";
import Singleq from "./Discuss";
import AskQues from "./AskQues";
import { Cookies } from "react-cookie";

const DiscussionForam = ({ ques }) => {
  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");
  // const [cookie1, setCookie] = useCookies(["userCookie"]);

  const [Discussions, setDiscussions] = useState([
    {
      id: 1, // this is discussion id
      Title: "Compititve coding",
      Ques: "What is Software Enggineering",
      Author: "John Wick",
      status: "prof",
      Likes: "50",
      dislikes: "0",
      share: "3",
      Topic: "none",
    },
    {
      id: 2,
      Title: "Compititve coding",
      Ques: "What is Software Enggineering ",
      Author: "saurabh Tiwari",
      status: "prof",
      Likes: "50",
      dislikes: "0",
      share: "3",
      Topic: "none",
    },
  ]);

  const addQuestion = (ques) => {
    const id = 5,
      Author = "Jainit";
    setDiscussions([...Discussions, { id, Author, Ques: ques }]);
    console.log(ques);
  };

  const AddaQues = ({ Ques, Topic }) => {
    const id = Discussions.length + 1; // to be added Dicussion id unique
    const Author = Cookie.name; // current user name
    const status = Cookie.Status; // if current student is prof or student
    const nwQues = { id, Author, Ques, Topic, status };
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

  const giveAnswer = (id) => {
    let temp = Answers.filter((i) => i.id === id && i.status == 1);
    let srt = Answers.filter((i) => i.id === id && i.status == 0);
    if (srt.length > 0) temp = [...temp, ...srt];
    return temp;
  };

  const addAnswer = (Ans) => {
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
        <div>
          <AskQues addQue={AddaQues} />
        </div>
      </div>
    </div>
  );
};

export default DiscussionForam;
