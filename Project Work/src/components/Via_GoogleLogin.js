
import GoogleLogin from "react-google-login";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Cookies, useCookies } from "react-cookie";
import {useHistory} from 'react-router-dom'


//nesvwvChpJDKPWbUgnNqrMrs
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

const Via_GoogleLogin = () => {

  const cookies = new Cookies();
  // const userCookie = cookies.get("userCookie");
  const [render, setRender] = useState(false);

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const [cookie, setCookie] = useCookies(["userCookie"]);
  const [user, setUser] = useState(true);

  
  const classes = useStyles();
  const history=useHistory();


  const responseGoogle = (response) => {
    console.log("Success");
    let status = true;
    let authCookie = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      GID: response.googleId,
      Status : status,
    };
    console.log('yess'+authCookie);
   
   
    setCookie("userCookie", authCookie);

    setUser(true);
    setRender(!render);
    history.push('/main');

  };
  // useEffect(() => {
  //   if (userCookie !== undefined) setUser(true);
  // });

    const fail = (res) => {
        console.log("Failed ", res);
      };
    return (
        <div>
            <GoogleLogin
                clientId='98804178892-1fih7npn7iqls0362n5dlviovv51mhmv.apps.googleusercontent.com'
                onSuccess={responseGoogle}
                onFailure={fail}
            >
                <strong>Sign in with Google</strong>
            </GoogleLogin>
        </div>
    )
}

export default Via_GoogleLogin
