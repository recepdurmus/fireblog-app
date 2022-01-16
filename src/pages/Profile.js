import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div>
      <Card sx={{ maxWidth: 400, margin: "50px auto", backgroundColor:'#4caf50', color:'white' }}>
        <Avatar sx={{width:'8rem', height:'8rem', margin: "2rem auto", fontSize:'4rem' }}>
          {currentUser.displayName
            ?.split(" ")
            .map((str) => str[0])
            .join("")
            .toUpperCase()}
        </Avatar>
        <CardContent
          sx={{
            padding: 4,
            maxWidth: "400px",
          }}
        >
          <Box>
            <Typography color="text.secondary">
              Username
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.displayName}
          </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">
              Email
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.email}
          </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">
              Creation Time
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.metadata.creationTime}
          </Typography>
          </Box>
          <Box>
            <Typography color="text.secondary">
              Last Sign In Time
            </Typography>
            <Typography variant="h6" component="div">
            {currentUser.metadata.lastSignInTime}
          </Typography>
          </Box>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
