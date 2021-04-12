
import GoogleLogin from "react-google-login";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CookiesProvider, Cookies, useCookies } from "react-cookie";
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
  const userCookie = cookies.get("userCookie");
  const [render, setRender] = useState(false);

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const [cookie, setCookie] = useCookies([""]);
  const [user, setUser] = useState(true);

  console.log("Home-Rerender");
  const classes = useStyles();


  const responseGoogle = (response) => {
    console.log("Success");
    let authCookie = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      GID: response.googleId,
    };
    console.log('yess'+authCookie);
    console.log(authCookie.email);
    console.log(authCookie.name);
    console.log(authCookie.GID);
    setCookie("userCookie", authCookie);

    // axios
    //   .post(`${API_URL}/addreader`, authCookie)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    
    setUser(true);
    setRender(!render);
  };
  useEffect(() => {
    if (userCookie !== undefined) setUser(true);
  });

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
