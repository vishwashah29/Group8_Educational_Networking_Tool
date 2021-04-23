
import React from 'react'
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import background1 from "./Images/logo.png";



const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },

      button: {
        margin: theme.spacing(2),
      },
  }));


const Project = ({Project}) => {
    const classes = useStyles();
    return (
      <div className='card' style={{backgroundColor:'#dae2f5', height:'500px', width:'700px', margin:'7%', borderRadius:'20px'}}>
        {/* <div className='ProjectBox'> */}
                <div style={{display:'inline-flex'}}>
                    
                        <div className='profilepic projhd'
                                style={{ 
                                    backgroundImage: `url(${background1})` ,
                                    height :'5vw',
                                    width : '4vw',
                                
                                    }}>
                        </div>
                        <div>
                            <div style={{display:'inline-flex', margin:'0px'}}>
                                <h2 className='projhd'>{Project.Title}</h2>
                               
                                </div>
                        <Button className='ApplyBtn' >
                            Apply
                        <PersonAddIcon fontSize="small" />
                        </Button>
                            
                        </div>
                    
                </div>
                <hr></hr>
                <div>
                    <p className='ProjectDiscrp'>{Project.description}</p>
                </div>
                
        </div>
        // </div>
    )
}

export default Project
