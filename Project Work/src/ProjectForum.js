import React from "react";
import { useState } from "react";
import Pro from "./Project";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Cookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    button: {
      margin: theme.spacing(2),
    },
  },
}));

const ProjectForum = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");

<<<<<<< HEAD
    const [Projects,setProjects] = useState([
        {
            id:1,
            Author:'Saurabh Tiwari',
            Title:'FingerPrint Based ATM System',
            description:`This project is a desktop application that uses the fingerprint of users for authentication. Since each individual has
            a unique fingerprint, this method of using fingerprint as a means of authentication to access your ATM is safer and 
            more secure than using an ATM card. Users need not carry their ATM cards with them at all times – they can use 
            their fingerprint to access ATM services.
            This project is a desktop application that uses the fingerprint of users for authentication. Since each individual has
            a unique fingerprint, this method of using fingerprint as a means of authentication to access your ATM is safer and 
            more secure than using an ATM card. Users need not carry their ATM cards with them at all times – they can use 
            their fingerprint to access ATM services.`           
            
    
        },
        {
            id:1,
            Author:'Saurabh Tiwari',
            Title:'FingerPrint Based ATM System',
            description:`This project is a desktop application that uses the fingerprint of users for authentication. Since each individual has
            a unique fingerprint, this method of using fingerprint as a means of authentication to access your ATM is safer and 
            more secure than using an ATM card. Users need not carry their ATM cards with them at all times – they can use 
            their fingerprint to access ATM services.
            This project is a desktop application that uses the fingerprint of users for authentication. Since each individual has
            a unique fingerprint, this method of using fingerprint as a means of authentication to access your ATM is safer and 
            more secure than using an ATM card. Users need not carry their ATM cards with them at all times – they can use 
            their fingerprint to access ATM services.`   
        }
    
    ]);
    const addProject = ({Project}) =>{
        setProjects([...Projects,])
    }
    const [isP,setISP] = useState(true);
    return (
        <div style={{display:'inline-flex'}} className='ProjOutBox' >
                <div>
                        {
                            Projects.map ( (Project)=>(
                                <Pro Project={Project} className='ProjOutBox'></Pro>
                            ))
                        }
                </div>
                <div>
                    {isP && 
                        <div className='AddAProject'>
                            <div>
                            <p className='AddProjTitle'>Add Project</p>
                            <TextField id="outlined-basic" label="Project Topic" variant="outlined"/>
                           
                            </div>
                            <div>
                            <TextField
                            id="outlined-multiline-static"
                            label="Discription"
                            multiline
                            rows={4}
                            variant="outlined"
                            />
                            </div>
                            <div>
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              
                            >
                              Ask
                            </Button>
                                </div>
                        </div>
                    }
                </div>
        </div>
    )
}
=======
  const [Projects, setProjects] = useState([
    {
      id: 1,
      Author: "Saurabh Tiwari",
      Title: "FingerPrint Based ATM System",
      description:
        "here goes respective description here goes respective description here goes respective description here goes respective description here goes respective description",
      participants: ["abc", "pqr"],
    },
    {
      id: 1,
      Author: "Saurabh Tiwari",
      Title: "FingerPrint Based ATM System",
      description:
        "here goes respective description here goes respective description here goes respective description here goes respective description here goes respective description",
    },
  ]);
  const addProject = ({ Project }) => {
    setProjects([...Projects]);
  };
  const [isP, setISP] = useState(true);
  return (
    <div style={{ display: "inline-flex" }} className="ProjOutBox">
      <div>
        {Projects.map((Project) => (
          <Pro Project={Project} className="ProjOutBox"></Pro>
        ))}
      </div>
      <div>
        {Cookie.Status && (
          <div className="AddAProject">
            <div>
              <p className="AddProjTitle">Add Project</p>
              <TextField
                id="outlined-basic"
                label="Project Topic"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Discription"
                multiline
                rows={4}
                variant="outlined"
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Add
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
>>>>>>> 410bfadd16090d4a75ecd9aec1456a3691f33bcd

export default ProjectForum;
