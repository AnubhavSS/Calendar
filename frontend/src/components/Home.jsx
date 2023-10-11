import React from 'react'
import { Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh', // This will make the container take the full viewport height
  };


const Home = () => {
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
          console.log(tokenResponse);
          const code = tokenResponse.code;
          axios
            .post("http://localhost:4000/api/create-token", { code })
            .then((response) =>{ console.log(response.data);  navigate("/details")})
            .catch((error) => console.log(error.message));
   
            
        },
        onError: (err) => console.log("Failed to Login", err),
        flow: "auth-code",
        scope: "openid email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
      });
    
  return (
    <div >
      <Typography variant='h3' color={'#FFF'} fontWeight={'700'} >
    Connect with Google Calendar
  </Typography>
  <div style={containerStyle}>
  <Button
    variant="contained"
    startIcon={<GoogleIcon />}
    sx={{ my: 4 }}
    onClick={() => login()}
  >
    Connect with Google Calendar
  </Button></div></div>
  )
}

export default Home