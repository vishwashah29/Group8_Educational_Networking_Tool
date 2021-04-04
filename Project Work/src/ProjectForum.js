import React from 'react'
import {useState} from 'react';
import Pro from './Project';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      button: {
        margin: theme.spacing(2),
      },
    },
  }));



const ProjectForum = () => {
    const classes = useStyles();

    const [Projects,setProjects] = useState([
        {
            id:1,
            Author:'Saurabh Tiwari',
            Title:'FingerPrint Based ATM System',
            description:'here goes respective description here goes respective description here goes respective description here goes respective description here goes respective description'
        },
        {
            id:1,
            Author:'Saurabh Tiwari',
            Title:'FingerPrint Based ATM System',
            description:'here goes respective description here goes respective description here goes respective description here goes respective description here goes respective description'
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

export default ProjectForum
