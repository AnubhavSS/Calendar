import React from 'react'
import { Card,CardContent,Typography,Avatar } from '@mui/material'
const Profile = () => {
  return (
    <Card sx={{width:'70vw',mx:"auto",mt:5}}>
        <Typography variant="h4"
          textAlign={"center"}
          m={2}
          textTransform={"uppercase"}>Profile</Typography>
    <CardContent>
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, mx:'auto' }}
      />
      <Typography sx={{ fontSize: 24,my:2 }} color="text.secondary" gutterBottom>
        Name:
      </Typography>
      <Typography sx={{ fontSize: 24,my:2 }} color="text.secondary" gutterBottom>
        Email:
      </Typography>
      <Typography sx={{ fontSize: 24,my:2 }} color="text.secondary" gutterBottom>
        Phone:
      </Typography>
    
    </CardContent>
    
  </Card>
  )
}

export default Profile