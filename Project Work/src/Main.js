import React, { useEffect, useState, useRef } from "react";
import PublicSharpIcon from "@material-ui/icons/PublicSharp";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import logo from "./Images/logo.png";
import "./App.css";
import PeopleIcon from "@material-ui/icons/People";
import { DropdownButton } from "react-bootstrap";
import { topics } from "./topics";
import People from "@material-ui/icons/People";
import { Unstable_TrapFocus } from "@material-ui/core";
import DiscussionForam from "./DiscussionForam";
import ProjectForum from "./ProjectForum";
import { FaThermometerEmpty } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditDetailsForm from "./EditDetailsForm";
const App = () => {
  //Default Person
  const defalut_Person = {
    fullName: "Johny Dep",
    instituteName: "DAIICT",
    batchStart: 2018,
    batchEnd: 2022,
    rollNum: 201801123,
    email: "Johny@gmail.com",
    profileIcon: "logo",
    interests: ["Maths", "Physics"],
    accomp: ["Olympiad", "design"],
    isStudent: true,
  };
  const [person, setPerson] = useState(defalut_Person);

  const {
    fullName,
    instituteName,
    batchStart,
    batchEnd,
    rollNum,
    email,
    profileIcon,
    interests,
    accomp,
    isStudent,
  } = person;
  const images = require.context("./Images/", true);
  let pic = images(`./${profileIcon}.png`).default;
  const [str, setStr] = useState("DETAILS");
  const [selectedTopic, setTopic] = useState("");
  const [page, setPage] = useState("PROFILE");
  const [isAdding, setIsAdding] = useState(false);
  const skill_temp = useRef("");
  const [question, setQuestion] = useState("");
  const [editDetails, setEditDetails] = useState(false);

  // REMOVE SKILL
  const removeSkill = (e) => {
    const tempSkill = person.accomp.filter((i) => i !== e.target.value);
    setPerson({
      ...person,
      accomp: tempSkill,
    });
  };

  //REMOVE INTERESTS
  const removeInt = (e) => {
    const tempInt = person.interests.filter((i) => i !== e.target.value);
    setPerson({
      ...person,
      interests: tempInt,
    });
  };

  //PRINT DETAILS, AND ALL STUFFS OF LOWER HALF
  const Printer = ({ str }) => {
    if (str === "DETAILS") {
      return (
        <div className="details">
          <div>Full Name: {fullName}</div>

          <div>Institute Name: {instituteName}</div>

          <div>
            Btech: {batchStart} - {batchEnd}
          </div>

          <div>Enrollment Number: {rollNum}</div>

          <div>Email : {email}</div>
          <button
            onClick={() => {
              setPage("EDITDETAILS");
            }}
          >
            {" "}
            Edit Details
          </button>
        </div>
      );
    }
    if (str === "INT") {
      return (
        <>
          <div className="int">
            {interests.map((i) => {
              return (
                <div>
                  {" "}
                  {i}{" "}
                  <button
                    name={interests}
                    value={i}
                    onClick={(e) => removeInt(e)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="add-btn-wrapper">
            {isAdding ? <Selecter className="add-topic-selector" /> : ""}
            <button
              className="add-item"
              name={interests}
              onClick={(e) => setIsAdding(!isAdding)}
            >
              +&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {isAdding ? "Completed!!" : "Add Interest"}
            </button>
          </div>
        </>
      );
    }
    if (str === "SKILL") {
      return (
        <div className="skill">
          {accomp.map((i) => {
            return (
              <div>
                {" "}
                {i}&nbsp;&nbsp;&nbsp;&nbsp;
                <button name={accomp} value={i} onClick={(e) => removeSkill(e)}>
                  Remove
                </button>
              </div>
            );
          })}
          {isAdding ? <input type="text" ref={skill_temp} /> : ""}
          <button
            className="add-item"
            name={accomp}
            onClick={(e) => {
              if (isAdding) addSkill();
              setIsAdding(!isAdding);
            }}
          >
            +&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {isAdding ? "Completed!!" : "Add Achievements"}
          </button>
        </div>
      );
    }
  };

  //UPPER HALF PROFILE PRINTER
  const ProfilePrinter = () => {
    return (
      <div className="profile-details">
        <img className="itm" src={pic} alt="profilePic" />
        <div className="itm">{fullName}</div>
        <div className="itm">{isStudent ? "Student" : "Professor"}</div>
        <div className="btn-wrapper">
          <button onClick={() => setStr("DETAILS")} className="btn1 btn-j">
            Details
          </button>
          <button onClick={() => setStr("INT")} className="btn2 btn-j">
            Interests
          </button>
          <button onClick={() => setStr("SKILL")} className="btn3 btn-j">
            Skills and Accomplishments
          </button>
        </div>
        <Printer str={str} />
      </div>
    );
  };

  // ADDS TOPIC OF INTERESTS

  const handleChange = (e) => {
    setTopic(e.target.value);
    if (!isAdding) {
    } else {
      if (e.target.value !== "Choose a topic") {
        var flag = false;
        person.interests.map((i) => {
          if (i === e.target.value) {
            flag = true;
          }
        });
        if (!flag) {
          const temp = [...interests, e.target.value];
          setPerson({ ...person, interests: temp });
        }
      }
    }
  };

  //ADD SKILL

  const addSkill = () => {
    const temp = [...accomp, skill_temp.current.value];
    setPerson({
      ...person,
      accomp: temp,
    });
  };

  // PROVIDE TOPIC MENU
  const Selecter = () => {
    return (
      <>
        <select className="dropdown" onChange={handleChange}>
          {topics.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </>
    );
  };

  const wrapSetPerson = (x) => {
    setPerson(x);
  };

  const wrapSetPage = (x) => {
    setPage(x);
  };

  console.log(page);
  // MAIN JSX
  return (
    <div id="container">
      <img src={logo} alt="logo" className="logo" />
      <input type="text" className="search" placeholder="Search"></input>
      {/*Can set image of profile"*/}
      <div className="profile-icon">
        <img src={pic} />
        <sup>&nbsp;&nbsp;&nbsp;{fullName}</sup>
      </div>

      <nav className="nav-bar">
        <button onClick={() => setPage("PROFILE")}>
          <div>
            <PeopleIcon></PeopleIcon>
            <sup>&nbsp;&nbsp;&nbsp;Profile</sup>
          </div>
        </button>
        <button onClick={() => setPage("PROJECT")}>
          <div>
            <SchoolOutlinedIcon></SchoolOutlinedIcon>
            <sup>&nbsp;&nbsp;&nbsp;Projects</sup>
          </div>
        </button>
        <button onClick={() => setPage("DISCUSSION")}>
          <div>
            <PublicSharpIcon></PublicSharpIcon>
            <sup>&nbsp;&nbsp;&nbsp;Discussion Forum</sup>
          </div>
        </button>
      </nav>

      {page === "PROFILE" ? (
        <ProfilePrinter />
      ) : page === "PROJECT" ? (
        <ProjectForum />
      ) : page === "DISCUSSION" ? (
        <DiscussionForam ques={question} />
      ) : (
        <EditDetailsForm
          person={person}
          setPerson={setPerson}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default App;
